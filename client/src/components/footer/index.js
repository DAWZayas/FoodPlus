import React from 'react';

export default class Footer extends React.Component {
  render() {
    
    const footerStyle = {
      color: 'white',
      backgroundColor: 'black',
      bottom: 0,
      margin: "2% 0 0 0",
    };

    return (
      <div className="footer" style={footerStyle}>
      <div className="row"> 
        <img src="./logo.png" width="130" height="50"/>       
        <br/>
          <div className="col-md-4">
            <center>
              <img src="http://i40.tinypic.com/29blsoi.jpg" className="img-circle" alt="Contact"/>
              <br/>
              <h4 className="footertext">Contact:</h4>
              <p className="footertext">Calle: la que sea nº11.<br/>
              Telefono: 918988989<br/>
              E-mail: foodplus/'@'/gmail.com
            </p></center>
          </div>
          <div className="col-md-4">
            <center>
              <img src="http://i47.tinypic.com/2zhl7vs.jpg" className="img-circle" alt="..."/>
              <br/>
              <h4 className="footertext">SocialNetworks</h4>
                <img src="http://i39.tinypic.com/33o1c44.jpg" />
                <right><img src="http://i43.tinypic.com/2ppijj4.jpg" /></right>
                <left><img src="http://i39.tinypic.com/16bhq41.jpg" /></left>
              </center>
          </div>
          <div className="col-md-4">
            <center>
              <img src="http://i47.tinypic.com/15zo4e0.jpg" className="img-circle" alt="others"/>
              <br/>
              <h4 className="footertext">Other</h4>
              <p className="footertext">Other things there<br/>
            </p></center>
          </div>
        </div>
        
        
        
      </div>
    );
  }
};