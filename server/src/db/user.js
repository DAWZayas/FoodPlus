import {thinky} from './thinky';

export const User = thinky.createModel('User', {
  login: thinky.type.string().required(),
  name: thinky.type.string().required(),
  surname: thinky.type.string().required(),
  address: thinky.type.string().required(),
  telephone: thinky.type.number().required(),
  email: thinky.type.string().required(),
  password: thinky.type.string().required(),
  registrationDate: thinky.type.date().default(thinky.r.now()),
});
