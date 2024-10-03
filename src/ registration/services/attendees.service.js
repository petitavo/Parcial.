import http from "../../shared/services/http-common.js";

/**
 * Attendees Service
 * @class AttendeesService
 * @Author Gustavo Huanca
 * @description
 * Provides a service to interact with attendee data from the API.
 * It contains the following properties:
 * @property {string} resourceEndpoint - The API endpoint for attendees
 * It contains the following methods:
 * @method getAll - Gets all attendees
 */
export class AttendeesService{
    /**
     * API endpoint for attendees
     * @type {string}
     */
    resourceEndpoint = '/attendees';

    /**
     * Gets all attendees
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @method getAll
     */
    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this.resourceEndpoint);
        return http.get(this.resourceEndpoint);
    }

    /**
     * Gets an attendee by id
     * @param id
     * @param data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */

    update(id, data) {
        return http.put(`${this.resourceEndpoint}/${id}`, data);
    }
}