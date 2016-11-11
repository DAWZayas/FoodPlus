import {thinky} from './thinky';

export const Plate = thinky.createModel('Plate', {
  name: thinky.type.string().required(),
  ingredients: thinky.type.array().schema(
    thinky.type.object().schema({
      ingredient1: thinky.type.string().required(),
      ingredient2: thinky.type.string().required(),
    })
  ).default([]),
})
