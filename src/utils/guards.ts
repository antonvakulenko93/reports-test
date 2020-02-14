import {Route} from 'vue-router';
import {RawLocation} from 'vue-router/types/router';

export const authGuard = (
        to: Route,
        from: Route,
        next: (to?: RawLocation | false | ((vm: any) => any) | void) => void,
    ) => {
    const isPrivateRoute = to.meta.private;
    const isLoggedIn = localStorage.getItem('access_token');

    if (isPrivateRoute && !isLoggedIn) {
        next('/login');
    } else if (!isPrivateRoute && isLoggedIn) {
        next('/');
    } else {
        next();
    }

};
