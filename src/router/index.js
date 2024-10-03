/**
 * @summary Application router configuration
 * @description Defines the application routes and configures navigation behavior
 * @author Gustavo Huanca
 */

import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import PageNotFound from "../public/pages/page-not-found.vue";
import CheckInComponent from "../ registration/pages/check-in.component.vue";

/**
 * @summary Creates the router instance
 * @description Configures the history mode and application routes
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', name: 'home', component: HomeComponent, meta: {title: 'Home'}},
        {path: '/registration/event-check-ins/new', name: 'check-in', component: CheckInComponent, meta: {title: 'check-in'}},
        {path: '/', redirect: '/home'},
        {path: '/:pathMatch(.*)*', name: 'page-not-found', component: PageNotFound, meta: {title: 'Page Not Found'}}
    ]
});

/**
 * @summary Global navigation guard
 * @description Updates the page title before each navigation
 */
router.beforeEach((to, from, next) => {
    let baseTitle = 'TP1';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})

export default router;