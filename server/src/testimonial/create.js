// npm packages
import passport from 'passport';
import moment from 'moment';

// our packages
import {Testimonial} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/testimonial', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {owner, creationDate, text} = req.body;

    if (!text) {
      res.status(400).send({error: 'You have to fill your testimonial with any text.'});
      return;
    }

    // Save new testimonial
    const testimonial = new Testimonial({
      owner: req.user.id,
      creationDate: moment(creationDate).toDate(),
      text,
      state: 'Awaiting',
    });
    await testimonial.save();

    //send created testimonial back
    res.send(testimonial);
  }));
};
