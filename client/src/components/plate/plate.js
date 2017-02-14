import React from 'react';

class Plates extends React.Component {


  render() {
    const {plates} = this.props;

    return (

      <div className="row">
        {plates.map(plate => (
          <div key={plate.id} className="col-sm-4">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>{plate.name}</h3>
                <p>Ingredients: {plate.ingredients}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Plates;
