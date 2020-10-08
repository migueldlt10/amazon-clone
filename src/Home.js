import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_img"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_3000x1200._CB451871227_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1234567"
          title="Samsung 32inch QLED 7-Series Smart TV"
          price={497.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SY400_.jpg"
        />
        <Product
          id="323552"
          title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card"
          price={499.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SY400_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="69506782"
          title="Dual Electronics 3-Way High Performance Outdoor Speakers"
          price={56.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51GQZT32D9L._AC_.jpg"
        />
        <Product
          id="1177893"
          title="G-Star 11 Premium 2 Hose Hookah Complete Set "
          price={34.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71OHYaBqZ9L._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="647932"
          title="Apple iPad Mini 64GB - Space Gray"
          price={899.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="637990"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
          price={49.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL480_SR480,480_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="098765"
          title="LEGO Star Wars: Attack of the Clones Yoda"
          price={89.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81KiqURF3tL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="637459"
          title="Super Mario Bros. U Deluxe - Nintendo Switch"
          price={64.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/811vUy172eL._AC_SY400_.jpg"
        />
        <Product
          id="373741"
          title="Funko POP Bobble: Star Wars - Darth Vader"
          price={24.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61D+xEuwLlL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
