// npm packages
import passport from 'passport';

// our packages
import {Testimonial} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/testimonial', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {text} = req.body;

    if (!text) {
      res.status(400).send({error: 'You have to fill your testimonial with any text.'});
      return;
    }

    // Save new testimonial
    const testimonial = new Testimonial({
      owner: req.user.id,
      ownerName: req.user.login,
      text,
      state: 'pending',
    });
    await testimonial.save();

    res.send(testimonial);
  }));
};
