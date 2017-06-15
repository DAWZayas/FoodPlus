import {login, register, logout} from './auth';
import {addNotification} from './notifications';
import {createPlate, getAllPlates, getThePlate, deletePlate, updatePlate, getMorePlates} from './plate';
import {sendTestimonial, updateTestimonial, getTestimonial, deleteTestimonial} from './testimonials';

export default [
  // auth
  login,
  register,
  logout,
  addNotification,
  // Plates
  createPlate,
  getAllPlates,
  deletePlate,
  updatePlate,
  getMorePlates,
  // Testimonials
  sendTestimonial,
  updateTestimonial,
  getTestimonial,
  deleteTestimonial,
];
