// npm packages
import passport from 'passport';

// our packages
import {Plate} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/plate/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
      // get requested Plate
      const plate = await Plate.get(req.params.id);

      // delete
      await plate.delete();

      //send success status
      res.sendStatus(204);
  }));
};
