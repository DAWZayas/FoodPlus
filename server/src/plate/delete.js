// npm packages
import passport from 'passport';

// our packages
import {Plate} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/plate/:id',
  passport.authenticate('jwt', {session: false}),
  asyncRequest(async (req, res) => {
    // get requested question
    const plate = await Plate.get(req.params.id);

    // check if user is the owner
    if (req.user.level !== 'admin') {
      res.status(403).send({error: 'Not enough rights to delete the plate!'});
      return;
    }

    // delete
    await plate.delete();

    // send success status
    res.sendStatus(204);
  }));
};
