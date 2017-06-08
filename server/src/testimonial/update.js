// npm packages
import passport from 'passport';

// our packages
import {Testimonial} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/testimonial/:testimonialId/:state', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {testimonialId, state} = req.params;

    // get testimonial
    const testimonial = await Testimonial.get(testimonialId);

    // double-check check if testimonial exists
    if (!testimonial) {
      res.status(400).send({error: 'Testimonial not found!'});
      return;
    }

    // check if user is administrator
    if (req.user.level !== 'admin') {
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
