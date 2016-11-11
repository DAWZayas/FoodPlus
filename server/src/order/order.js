// our packages
import {Plate} from '../db';
import {asyncRequest} from '../util';

export const plateTaken = async (name) => {
  // check if login already taken
  const plate = await Plate.filter({name}).run();
  return plate.length > 0;
};

export default (app) => {
  app.post('/api/plates', asyncRequest(async (req, res) => {
    // get user input
    const {name} = req.body;
    // check if Menu already taken
    const exists = await plateTaken(name);
    if (exists) {
      res.status(403).send({error: 'plate already exists!'});
      return;
    }

    // save new Menu
    const plate = new Plate({
      name,
    });
    await plate.save();

    res.sendStatus(201);



  }));
};
