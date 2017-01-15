//npm packages
import passport from 'passport';
import moment from 'moment';

// our packages
import {Plates} from '../plates';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/plate', passport.authenticate('jwt', {session:false}), asyncRequest(async(req, res) => {
    // get name of plate and his ingredients
    const {name, ingredients} = req.body;

    // make sure plate isn't empty
    if (!name || !name.lenght) {
      res.status(400).send({error: 'The name of the plate would be present!'});
      return;
    }
    // make sure ingredients isn't empty
    if (!ingredients || !ingredients.length) {
      res.status(400).send({error: 'Ingredients of the plate are required!'});
    }

    // Save new plate
    const plate = new Plate({
      name,
      ingredients,
    });
    await plate.save();
  }));
};
