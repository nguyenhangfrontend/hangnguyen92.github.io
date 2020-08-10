
import { patientList, creation } from './constants';

const routes = [
  {
    path: '/patient-list',
    name: 'Danh sách người bệnh',
    component: patientList,
  },
  {
    path: '/config',
    name: 'Config',
    component: creation,
  },
];

export default routes;
