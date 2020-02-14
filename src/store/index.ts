import Vue from 'vue';
import Vuex from 'vuex';
import {createStore} from 'vuex-smart-module';
import RootStore from '@/store/modules/root';

Vue.use(Vuex);
const store = createStore(
    RootStore,
    {
      strict: process.env.NODE_ENV !== 'production',
    },
);

export default store;
