/**
 * Attendees Entity
 * @class Attendees
 * @Author Gustavo Huanca
 * @description
 * Represents an attendee. It contains the following properties:
 * @property {number} id - The unique identifier of the attendee
 * @property {string} firstName - The first name of the attendee
 * @property {string} lastName - The last name of the attendee
 * @property {number} eventId - The identifier of the event
 * @property {string} ticketIdentifier - The ticket identifier of the attendee
 * @property {string} checkedInAt - The check-in date of the attendee
 */
export class Attendees{
    /**
     * Creates an instance of Attendees
     * @param {Object} params - The parameters to create an Attendee
     * @param {number} [params.id=0] - The unique identifier of the attendee
     * @param {string} [params.firstName=''] - The first name of the attendee
     * @param {string} [params.lastName=''] - The last name of the attendee
     * @param {number} [params.eventId=0] - The identifier of the event
     * @param {string} [params.ticketIdentifier=''] - The ticket identifier of the attendee
     * @param {string} [params.checkedInAt=''] - The check-in date of the attendee
     * @returns {Attendees} - An instance of Attendees
     */
    constructor({id = 0, firstName = '', lastName = '', eventId = 0, ticketIdentifier = '', checkedInAt = ''}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eventId = eventId;
        this.ticketIdentifier = ticketIdentifier;
        this.checkedInAt = checkedInAt;
    }

}
