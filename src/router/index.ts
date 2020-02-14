import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login.vue';
import Main from '@/views/Main.vue';
import {authGuard} from '@/utils/guards';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: {
      private: true,
    },
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/Editor.vue'),
    meta: {
      private: true,
    },
  },
  {
    path: '/editor/:draft_report_id',
    name: 'EditorDraft',
    component: () => import('../views/Editor.vue'),
    meta: {
      private: true,
    },
  },
  {
    path: '/create',
    name: 'CreateReport',
    component: () => import('../views/CreateReport.vue'),
    meta: {
      private: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      private: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(authGuard);

export default router;
