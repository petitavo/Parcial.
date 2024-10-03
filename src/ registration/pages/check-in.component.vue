<script>
import { Events } from '../model/events.entity';
import { Attendees } from '../model/attendees.entity';
import { EventsService } from '../services/events.service';
import { AttendeesService } from '../services/attendees.service';

export default {
  name: "check-in",
  data() {
    return {
      events: [],
      attendees: [],
      eventsService: null,
      attendeesService: null,
      ticketIdentifier: '',
      checkedInAttendee: null,
      errorMessage: ''
    };
  },
  methods: {
    //#region Methods
    checkIn() {
      this.errorMessage = '';
      this.checkedInAttendee = null;

      const attendee = this.attendees.find(a => a.ticketIdentifier === this.ticketIdentifier);

      if (!attendee) {
        this.errorMessage = 'Invalid Ticket Identifier';
        return;
      }

      if (attendee.checkedInAt) {
        this.errorMessage = 'Already Checked-In';
        return;
      }

      // Update checkedInAt
      attendee.checkedInAt = new Date().toISOString();

      this.attendeesService.update(attendee.id, attendee)
          .then(() => {
            const event = this.events.find(e => e.id === attendee.eventId);
            this.checkedInAttendee = {...attendee, event};
          })
          .catch(error => {
            console.error('Error updating attendee:', error);
            this.errorMessage = 'Error checking in. Please try again.';
          });
    }
    //#endregion
  },
  //#region Lifecycle Hooks
  created() {
    this.eventsService = new EventsService();
    this.attendeesService = new AttendeesService();

    this.eventsService.getAll().then(response => {
      this.events = response.data.map(event => new Events(event));
    }).catch(error => console.error('Error fetching events:', error));

    this.attendeesService.getAll().then(response => {
      this.attendees = response.data.map(attendee => new Attendees(attendee));
    }).catch(error => console.error('Error fetching attendees:', error));
  }
  //#endregion
}
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <pv-card class="mb-4">
      <template #title>
        <h1 class="text-3xl font-bold">{{ $t('Event-Check-In') }}</h1>
      </template>
      <template #content>
        <h2 class="text-xl font-semibold mb-4">{{ $t('Ticket-Validation') }}</h2>

        <form @submit.prevent="checkIn" class="mb-4">
          <div class="mb-4">
            <label for="ticketIdentifier" class="block text-sm font-medium text-gray-700 mb-2">
              {{ $t('ticketIdentifier') }}
            </label>
            <pv-input-text
                v-model="ticketIdentifier"
                id="ticketIdentifier"
                type="text"
                class="w-full"
                required
            />
          </div>
          <pv-button
              type="submit"
              label="Check-In"
              class="p-button-primary"
          />
        </form>

        <pv-message v-if="errorMessage" severity="error" :closable="false" class="mb-4">{{ errorMessage }}</pv-message>

        <pv-card v-if="checkedInAttendee" class="mb-4">
          <template #title>
            <h3 class="font-bold">Check-In Successful</h3>
          </template>
          <template #content>
            <div class="grid grid-cols-2 gap-2">
              <div><strong>Event ID:</strong></div>
              <div>{{ checkedInAttendee.event.id }}</div>
              <div><strong>Event Name:</strong></div>
              <div>{{ checkedInAttendee.event.name }}</div>
              <div><strong>Event Description:</strong></div>
              <div>{{ checkedInAttendee.event.description }}</div>
              <div><strong>Attendee First Name:</strong></div>
              <div>{{ checkedInAttendee.firstName }}</div>
              <div><strong>Attendee Last Name:</strong></div>
              <div>{{ checkedInAttendee.lastName }}</div>
              <div><strong>Checked-In At:</strong></div>
              <div>{{ new Date(checkedInAttendee.checkedInAt).toLocaleString() }}</div>
            </div>
          </template>
        </pv-card>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
</style>