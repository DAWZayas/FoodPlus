import {thinky} from './thinky';

export const Plate = thinky.createModel('Plate', {
  name: thinky.type.string().required(),
  urlimage: thinky.type.string().required(),
  ingredients: thinky.type.string().required(),
});
