import React from "react";
import Assortment from "../Assortment/Assortment";
import { assets } from "../../assets/assets";
import "./Home.scss";
import { MdArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__imges">
          <div className="home__left_img">
            <img src={assets.homeBig} alt="" className="home__home-big-img" />
          </div>
          <div className="home__right_img">
            <img
              src={assets.homeSmallOne}
              alt=""
              className="home__home-small-img"
            />
            <img
              src={assets.homeSmalltwo}
              alt=""
              className="home__home-small-img"
            />
          </div>
        </div>
        <div className="home__title-btn">
          <h1 className="home__title">
            Promotions selected by our specialists
          </h1>
          <button className="home__btn">
            View all Promotions <MdArrowRight />
          </button>
        </div>
        <Assortment />
        <h1 className="home__title">Highlighted</h1>
        <div className="home__row">
          <div className="home__col">
            <div className="home__col-title-btn">
              <h2 className="home__col-title">Discover the newest products</h2>
              <button className="home__col-btn">View products</button>
            </div>
            <img className="home__col-img" src={assets.homePageImg1} alt="" />
          </div>
          <div className="home__col">
            <div className="home__col-title-btn">
              <h2 className="home__col-title">The best discounts</h2>
              <button className="home__col-btn">View all promotions</button>
            </div>
            <img className="home__col-img" src={assets.homePageImg2} alt="" />
          </div>
          <div className="home__col">
            <div className="home__col-title-btn">
              <h2 className="home__col-title">View non-food assortment</h2>
              <button className="home__col-btn">Be inspired</button>
            </div>
            <img className="home__col-img" src={assets.homePageImg3} alt="" />
          </div>
        </div>

        <div className="home__article">
          <img src={assets.article1} alt="" className="home__article-img" />

          <div className="home__article-right">
            <h1 className="home__article-right-title">
              Iconic wines & digestifs
            </h1>
            <h3 className="home__article-right-subtitle">
              Step into a world of luxury and splendor with iconic wines and
              digestifs, where every sip is an experience in itself. From
              sparkling champagnes and white wines from the best terroirs to
              intense red wines and rich dessert wines. Be seduced by the
              over-the-top flair and enjoy drinks that match an evening full of
              style and glamour. Below is a selection of our favorites, or click
              directly on the button for all selected 'Iconic wines &
              digestifs'.
            </h3>
            <button className="home__article-right-btn">
              Discover the selections
            </button>
          </div>
        </div>

        <Assortment />

        <div className="home__article">
          <img src={assets.article2} alt="" className="home__article-img" />

          <div className="home__article-right">
            <h1 className="home__article-right-title">Festive Season</h1>
            <h3 className="home__article-right-subtitle">
              Celebrate the festive season in style with HANOS and enjoy refined
              culinary moments. Whether you choose glamorous dishes full of
              luxury or seek the warmth of nostalgic, classic flavors, HANOS has
              everything you need to make your holiday table shine. Our
              specialists offer unique and distinctive products to truly
              surprise your guests. Go all out this year and make the festive
              season a shining success!
            </h3>
            <button className="home__article-right-btn">
              Entdecken Sie das Angebot
            </button>
          </div>
        </div>
        <h3 className="home__title">Entdecken Sie einige festliche Artikel:</h3>

        <Assortment />
      </div>
    </div>
  );
};

export default Home;
