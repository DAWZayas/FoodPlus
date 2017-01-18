import {thinky} from './thinky';

export const Testimonial = thinky.createModel('Testimonial', {
  owner: thinky.type.string().required(),
  creationDate: thinky.type.date().default(thinky.r.now()),
  text: thinky.type.string().required(),
});
