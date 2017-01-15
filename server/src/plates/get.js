// npm packages
import passport from 'passport';

// our packages
import {Plate} from '../db';
import {asyncRequest} from '../util';

export default (app) =>
  app.get('/api/plate/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, rest) => {
    // get requested plate
    const plate = await Plate.get(req.params.id);
    // send plate back
    res.send(plate);
  }));

  app.get('/api/plate', passport.authenticate('jwt', {session: false}), asyncRequest(async => (req, res) => {
    // get 10 lastest Plates
    const plates = await Plate.limit(10);
    // send plates back
    res.send(plates);
  }))
