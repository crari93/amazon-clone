import React from "react";
import "../Styles/Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="amazonBackground"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        ></img>

        <div className="home__row">
          <Product
            id="123156"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="123157"
            title="Kenwood Mix Stand Miser for Bakin, Stylish Kitchen Mixer with K-beater, dough Hook and Wisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123158"
            title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />

          <Product
            id="123160"
            title="New Apple Ipad Pro (12.9-inch, Wifi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={4}
          />

          <Product
            id="123160"
            title="FitBit band"
            price={87.95}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123159"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}
