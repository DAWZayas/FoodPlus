// npm packages
import passport from 'passport';

// our packages
import {Plate} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/plate', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get name of plate and his ingredients
    const {name, urlimage, ingredients} = req.body;

    // make sure plate isn't empty
    if (!name) {
      res.status(400).send({error: 'The name of the plate should be present!'});
      return;
    }
    if (!urlimage) {
      res.status(400).send({error: 'An image for the plate it\'s obligatory'});
      return;
    }
    // make sure ingredients isn't empty
    if (!ingredients) {
      res.status(400).send({error: 'Ingredients of the plate are required!'});
      return;
    }

    // Save new plate
    const plate = new Plate({
      name,
      urlimage,
      ingredients,
    });
    await plate.save();

    //send created plate back
    res.send(plate);
  }));
};
