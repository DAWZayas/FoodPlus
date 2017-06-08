// npm packages
import passport from 'passport';

// our packages
import {Testimonial} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/testimonial/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {testimonialId} = req.params;
    // get user input
    const {state} = req.body;

    // make sure text is not empty
    if (state !== undefined && !state.length) {
      res.status(400).send({error: 'State can not be empty!'});
      return;
    }

    // get the question
    const testimonial = await Testimonial.get(testimonialId);

    // double-check check if question exists
    if (!testimonial) {
      res.status(400).send({error: 'Testimonial not found!'});
      return;
    }

    // check if user is administrator
    if (req.user.level !== 1) {
      res.status(403).send({error: 'Not enough rights to change the testimonial!'});
      return;
    }

    if (state) {
      testimonial.state = state;
    }
    // try saving
    await testimonial.save();

    // send created testimonial back
    res.send(testimonial);
  }));
};
