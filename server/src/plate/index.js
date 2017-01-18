// our packages
import create from './create';
import get from './get';
import deletePlate from './delete'

export default (app) => {
  create(app);
  get(app);
  deletePlate(app);
};
