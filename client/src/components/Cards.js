import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="h1__headers">
            <h2>Professional Exams</h2>
            <h2>Universities</h2>
            <h2>Courses</h2>
          </div>

          <div className="card__title">
            <h2>Free Past Questions</h2>
            <ul className="cards__items">
              <CardItem
                alt="WAEC image"
                src="//adminpanel.myafrilearn.com/exam_images/FIL5cdd81ff822d929919720190516153007.png"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="WAEC"
                path="/services"
              />
              <CardItem
                src="//adminpanel.myafrilearn.com/exam_images/FIL5cdd8eaf143ae40466520190516162415.png"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="NECO"
                path="/services"
              />
              <CardItem
                src="//adminpanel.myafrilearn.com/exam_images/FIL5cdd82202903629090720190516153040.png"
                text="Experience Football on Top of the Himilayan Mountains"
                label="JAMB/UME"
                path="/products"
              />
              <span className="past-questions-hidden">
                <CardItem
                  src="//adminpanel.myafrilearn.com/exam_images/FIL5cdd8e76cd9b719027320190516162318.png"
                  text="Experience Football on Top of the Himilayan Mountains"
                  label="GCE"
                  path="/products"
                />
              </span>
            </ul>
          </div>

          <ul className="hidden__cards__items">
            <h2 id="hidden__h2">Professional Exams</h2>
            <CardItem
              src="//adminpanel.myafrilearn.com/exam_images/FIL5cdd8e93671ba29584920190516162347.png"
              text="Experience Football on Top of the Himilayan Mountains"
              label="ICAN"
              path="/products"
            />
            <h2 id="hidden__h2">Universities</h2>
            <CardItem
              src="https://myafrilearn.com/assets/img/afrilearn_logo.png"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Universities"
              path="/sign-up"
              id="afrilearn__card"
            />
            <h2 id="hidden__h2">Courses</h2>
            <CardItem
              src="https://myafrilearn.com/assets/img/afrilearn_logo.png"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Courses"
              path="/sign-up"
              id="afrilearn__card"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
