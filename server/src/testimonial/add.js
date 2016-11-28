// npm packages
import passport from 'passport';
// our packages
import {Testimonial} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/testimonial/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get user input
    const {id_parent, text, } = req.body;

    //check if login already taken
    // const exists = await loginTaken(login);
    // if (exists) {
    //   res.status(403).send({error: 'User already exists!'});
    //   return;
    // }

    // save new Testimonial
    const testimonial = new Testimonial({
      id_parent: req.user.id,
      text,
    });
    await testimonial.save();

    res.sendStatus(201);
  }));
};
