import http from "../../shared/services/http-common.js";

/**
 * Events Service
 * @class EventsService
 * @Author Gustavo Huanca
 * @description
 * Provides a service to interact with event data from the API.
 * It contains the following properties:
 * @property {string} resourceEndpoint - The API endpoint for events
 * It contains the following methods:
 * @method getAll - Gets all events
 */



export class EventsService{
    /**
     * API endpoint for events
     * @type {string}
     */

    resourceEndpoint = '/events';


    /**
     * Gets all events
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @method getAll
     */

    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this.resourceEndpoint);
        return http.get(this.resourceEndpoint);
    }
}