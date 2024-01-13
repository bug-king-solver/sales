import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import LabTest from '../pages/LabTest.vue';
import Appointment from '../pages/Appointment.vue';
import MedicineOrder from '../pages/MedicineOrder.vue';
import Message from '../pages/Message.vue';
import Payment from '../pages/Payment.vue';
import Settings from '../pages/Settings.vue';
import Help from '../pages/Help.vue';
import ProductDetail from '../components/Dashboard/ProductDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/products/:productId',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/lab-test',
    name: 'LabTest',
    component: LabTest
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment
  },
  {
    path: '/medicine-order',
    name: 'MedicineOrder',
    component: MedicineOrder
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
