import { axiosWithAuth } from '../services/authServices';

export const MOVE_REQUEST = async direction => {
  const { data } = await axiosWithAuth().post('api/adv/move/', { direction });

  return data;
};

export const Hello = 'hello';
