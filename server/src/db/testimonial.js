import {thinky} from './thinky';

export const Testimonial = thinky.createModel('Testimonial', {
  id_parent: thinky.type.string().required(),
  text: thinky.type.string().required(),
  date: thinky.type.date().default(thinky.r.now()),
});
