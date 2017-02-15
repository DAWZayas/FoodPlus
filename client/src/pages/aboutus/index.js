import React from 'react';
import GoogleMaps from '../../images/googlemaps.jpg';
import style from '../../css/style.css';

const AboutUs = () => (
  <section className="row">
    <div className="col-md-12">
      <div className={style.headerAbout}/>
    </div>
    <div className="col-md-12">
      <article className={style.containerText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo tempor justo, eu sagittis urna commodo ut. Integer vel mauris ut lacus lacinia hendrerit. Sed aliquam finibus vehicula. Suspendisse eget nisl et odio placerat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam quis pellentesque mauris. Sed varius massa quis finibus tempor. Ut feugiat orci sed ligula accumsan consequat. Aenean non velit lectus.</p>

        <p>Cras mattis lacus convallis dictum pretium. Nulla malesuada felis ac tortor egestas euismod. Praesent quis velit consectetur, posuere urna at, molestie augue. Praesent eget nibh consequat, commodo tellus eget, bibendum nibh. Praesent justo eros, hendrerit ut volutpat ac, gravida quis odio. Sed fringilla neque sed sem vestibulum, et hendrerit mi rhoncus. Pellentesque placerat diam non lacus lobortis, quis ornare odio congue. Maecenas pellentesque, nisi non rhoncus dictum, sem nunc convallis erat, ullamcorper condimentum nulla libero sit amet velit. Nam imperdiet consequat sapien, et sagittis dui sollicitudin vitae.</p>

        <p>Etiam et nibh vel turpis ultrices molestie. Pellentesque id massa sit amet sapien varius venenatis at luctus sapien. Nulla mattis finibus bibendum. Nullam sollicitudin dolor at lacus vehicula, ut venenatis tortor viverra. Pellentesque ac euismod nisi, non vehicula sapien. Fusce dictum iaculis nulla dapibus laoreet. Aenean ut nisl auctor, feugiat mauris et, ultrices lacus.</p>
      </article>
    </div>
    <div className="col-md-12">
      <img className={style.googleMap} src={GoogleMaps} alt="GoogleMaps" />
    </div>
  </section>
);
export default AboutUs;
