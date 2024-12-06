import { React } from "react";
import "./Map.scss";

const Map = () => {
  return (
    <div className="map">
      <div className="container map__container">
        <div className="map__left">
          <h1 className="map__title">Hanos Store</h1>
          <div className="map__list">
            <ul className="map__ul">
              <li className="map__li">
                HANOS Ameland <br/>
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
                </li>
                <hr />
              <li className="map__li">
                HANOS Amsterdam <br />
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
              </li>
              <hr />
              <li className="map__li">
                HANOS Apeldoorn <br />
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
              </li>
              <hr />
              <li className="map__li">
                HANOS Den Haag-Delft <br /> 
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
              </li>
              <hr />
              <li className="map__li">
                HANOS Doetinchem <br />
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
              </li>
              <hr />
              <li className="map__li">
                HANOS Eindhoven <br />
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
              </li>
              <hr />
              <li className="map__li">
                HANOS Groningen <br />
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
                </li>
                <hr />
              <li className="map__li">
                HANOS Haarlem (alleen bezorging) <br />
                <span className="map__span">Open today until</span>
                <span className="map__time">17:00</span>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div className="right">
          <iframe
            className="map__map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1157996.4128043773!2d4.30330026436182!3d51.34438516993045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shanos%20locations!5e0!3m2!1sru!2skg!4v1731642366353!5m2!1sru!2skg"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>
      </div>
    </div>
  );
};

export default Map;
