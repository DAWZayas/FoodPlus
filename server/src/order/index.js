// our packages
import order from './order';
import updatePlate from './updatePlate';

export default (app) => {
  order(app);
  updatePlate(app);
};

export {plateTaken} from './order';
