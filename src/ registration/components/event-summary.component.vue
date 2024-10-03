<script>
import { Events } from '../model/events.entity';
import { Attendees } from '../model/attendees.entity';
import { EventsService } from '../services/events.service';
import { AttendeesService } from '../services/attendees.service';

export default {
  name: "event-summary",
  data() {
    return {
      events: [],
      attendees: [],
      eventsService: null,
      attendeesService: null
    };
  },
  computed: {
    //#region Computed Properties
    eventSummaries() {
      return this.events.map(event => {
        const eventAttendees = this.attendees.filter(attendee => attendee.eventId === event.id);
        const registeredAttendees = eventAttendees.length;
        const checkedInAttendees = eventAttendees.filter(attendee => attendee.checkedInAt).length;
        const attendancePercentage = registeredAttendees > 0
            ? Math.round((checkedInAttendees / registeredAttendees) * 100)
            : 0;

        return {
          event,
          registeredAttendees,
          attendancePercentage
        };
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
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <pv-card v-for="summary in eventSummaries" :key="summary.event.id" class="h-full">
      <template #header>
        <h3 class="text-xl font-bold">{{ summary.event.name }}</h3>
      </template>
      <template #content>
        <p class="text-gray-600">{{ summary.event.description }}</p>
      </template>
      <template #footer>
        <div class="flex flex-col">
          <div>
            <strong class="text-sm">{{ $t('registeredAttendees') }}:</strong>
            <span class="ml-1 text-lg">{{ summary.registeredAttendees }}</span>
          </div>
          <div class="mt-4">
            <strong class="text-sm">{{ $t('attendancePercentage') }}:</strong>
            <span class="ml-1 text-lg">{{ summary.attendancePercentage }}%</span>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
</style>