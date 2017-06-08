import {thinky} from './thinky';

export const Testimonial = thinky.createModel('Testimonial', {
  owner: thinky.type.string().required(),
  ownerName: thinky.type.string().required(),
  text: thinky.type.string().required(),
  state: thinky.type.string().required(),
});
