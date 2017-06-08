// npm packages
import passport from 'passport';

// our packages
import {r, Testimonial} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/testimonial', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const testimonial = await r.table('Testimonial').orderBy(r.desc('id'));
    // send question back
    res.send(testimonial);
  }));

  app.get('/api/testimonial/:id', asyncRequest(async (req, res) => {
    try {
      // get requested plate
      const testimonial = await Testimonial.get(req.params.id);
      // send plate back
      res.send(testimonial);
    } catch (e) {
      res.status(400).send({error: 'This testimonial does not exist'});
    }
  }));
};
