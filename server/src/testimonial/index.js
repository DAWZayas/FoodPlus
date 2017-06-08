// our packages
import create from './create';
import get from './get';
import deleteTestimonial from './delete';
import update from './update';

export default (app) => {
  create(app);
  get(app);
  deleteTestimonial(app);
  update(app);
};
