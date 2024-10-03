/**
 * Events Entity
 * @class Events
 * @Author Gustavo Huanca
 * @description
 * Represents an event. It contains the following properties:
 * @property {number} id - The unique identifier of the event
 * @property {string} name - The name of the event
 * @property {string} description - The description of the event
 * @property {string} scheduledAt - The date of the event
 */

export class Events{
    /**
     * Creates an instance of Events
     * @param {Object} params - The parameters to create an Event
     * @param {number} [params.id=0] - The unique identifier of the event
     * @param {string} [params.name=''] - The name of the event
     * @param {string} [params.description=''] - The description of the event
     * @param {string} [params.scheduledAt=''] - The date of the event
     * @returns {Events} - An instance of Events
     */
    constructor({id = 0, name = '', description = '', scheduledAt = ''}){
        this.id = id;
        this.name = name;
        this.description = description;
        this.scheduledAt = scheduledAt;
    }
}