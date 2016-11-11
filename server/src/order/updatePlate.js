// npm packages
import passport from 'passport';

// our packages
import {plates} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/plate/update/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {id} = req.params;
    // get user input
    const {name} = req.body;

    // make sure text is not empty
    if (name !== undefined && !name.length) {
      res.status(400).send({error: 'plate name should be not empty!'});
      return;
    }

    // get the plate
    const plate = await Plate.get(id);

    // check if plate exists
    if (!plate) {
      res.status(400).send({error: 'plate not found!'});
      return;
    }

    if (req.user.id !== plate.owner) {
      res.status(403).send({error: 'Not enough rights to change the plate!'});
      return;
    }

    // if not changes- just send OK
    if (!name) {
      res.send(plate);
      return;
    }

    if (name) {
      plate.name = name;
    }

    // try saving
    await plate.save();

    // send created question back
    res.send(plate);
  }));
};
