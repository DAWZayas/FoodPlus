  // render() {
  //
  //   return (
  //     <div className="footer">
  //     <div className="row">
  //         <div className="col-md-4">
  //           <center>
  //             <h4 className="footertext">Contacto:</h4>
  //             <ul>
  //               <li>Calle: la que sea nº11.</li>
  //               <li>Teléfono: 918988989</li>
  //               <li>E-mail: foodplus/'@'/gmail.com</li>
  //            </ul>>
  //           </center>
  //         </div>
  //         <div className="col-md-4">
  //           <center>
  //             <h4 className="footertext">SocialNetworks</h4>
  //               <img src="http://i39.tinypic.com/33o1c44.jpg" />
  //               <right><img src="http://i43.tinypic.com/2ppijj4.jpg" /></right>
  //               <left><img src="http://i39.tinypic.com/16bhq41.jpg" /></left>
  //             </center>
  //         </div>
  //         <div className="col-md-4">
  //           <center>
  //             <h4 className="footertext">Other</h4>
  //             <p className="footertext">Other things there<br/>
  //           </p></center>
  //         </div>
  //       </div>
  //
  //
  //
  //     </div>
  // npm packages
  import React from 'react';

  import {Notifications} from '../notifications';

  const style = {
    footer: {
      zIndex: 9999,
      position: 'fixed',
      bottom: '0',
      width: '90%',
    },
  };

  export default () => (
    <footer style={style.footer}>
      <div className="col-md-8">
        <Notifications />
      </div>
    </footer>
  );
