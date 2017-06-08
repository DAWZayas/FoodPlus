// npm packages
import passport from 'passport';

// our packages
import {Testimonial} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/testimonial/:testimonialId',
  passport.authenticate('jwt', {session: false}),
  asyncRequest(async (req, res) => {
    // get requested question
    const testimonial = await Testimonial.get(req.params.testimonialId);

    // check if user is the owner
    if (req.user.level !== 'admin') {
      res.status(403).send({error: 'Not enough rights to delete the testimonial!'});
      return;
    }

    // delete
    await testimonial.delete();

    // send success status
    res.sendStatus(204);
  }));
};
