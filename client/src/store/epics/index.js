import {login, register, logout} from './auth';
import {addNotification} from './notifications';
import {createPlate, getAllPlates, getThePlate, deletePlate} from './plate';
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
  getThePlate,
  deletePlate,
  // Testimonials
  sendTestimonial,
  updateTestimonial,
  getTestimonial,
  deleteTestimonial,
];
