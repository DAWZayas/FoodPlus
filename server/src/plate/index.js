// our packages
import create from './create';
import get from './get';
import update from './update';
import deletePlate from './delete';

export default (app) => {
  create(app);
  get(app);
  update(app);
  deletePlate(app);
};
