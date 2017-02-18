import passport from 'passport';

import {asyncRequest} from '../util';
import {Plate} from '../db';

export default (app) => {
  app.post('/api/plate/:id', passport.authenticate('jwt', {session: false}),
  asyncRequest(async (req, res) => {
    const {name, ingredients} = req.body;

    let plate;
    try {
      plate = await Plate.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: "The plate doesn't exist"});
      return;
    }

    // Update
    if (name) {
      plate.name = name;
    }
    if (ingredients) {
      plate.ingredients = ingredients;
    }

    try {
      await plate.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }
    // Send the result
    res.send(plate);
  }));
};
