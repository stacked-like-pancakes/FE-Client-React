import axios from 'axios';
import { axiosWithAuth } from './authServices';

export default async () => {
  const rooms = axiosWithAuth().get('api/adv/rooms/');
  const initialize = axiosWithAuth().get('api/adv/init/');
  const [roomState, initializeState] = await axios.all([rooms, initialize]);

  return [roomState, initializeState];
};
