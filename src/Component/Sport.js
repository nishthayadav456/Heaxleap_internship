import React from "react";
import { Store } from "./ContextStore";
import { useContext, useState } from "react";
import "./Sport.css";
const Sport = () => {
  const [ContextData] = useContext(Store);
  const [darkMode, setDarkMode] = useState(false);
 
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (

    <div className={`sports-container ${darkMode ? "dark-mode" : ""}`}>

        <div className="header">
            <div className="inner-header">
        <div className="sports-heading">Sports</div>
        <div className="theme-toggle">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
        </div>
      
        </div>
     
      </div>

      <div className="sports-grid">
        <div className="sport-container">
          {ContextData.filter((item) => item.id >= 1 && item.id < 5).map(
            (item, index) => {
              return (
                <div className="sport-item" key={index}>
                  <div className="sport-image">
                    <img id="sport-img" src={item.image} alt="not found" />
                    <div className="content">{item.content}</div>
                    <div className="parent-event">
                      <div>Total Events </div>
                      <div> Sports</div>
                    </div>
                    <div className="event">
                      <div>{item.event} Events</div>
                      <div>{item.sport}</div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          {ContextData.filter((item) => item.id >= 5 && item.id < 6).map(
            (item, index) => {
              return (
                <div className="advertisment" key={index}>
                  <div className="advertisment-image">
                    <img id="advertisment-img" src={item.image} alt="not found" />
                    <div className="content">{item.content}</div>
                    <div className="event-info">{item.description}</div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="see-more">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded">
          See More
        </button>
      </div>

      <div className="collection-spotlight">
        <div class="font-bold text-4xl mb-3">Collection Spotlight</div>
      </div>
      <div className="mid-headline">
        <p className="collection-description">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <div className="slider-container">
      <button className="slider-arrow left-arrow">{"<"}</button>
        {ContextData.filter((item) => item.id >= 6 && item.id < 9).map(
          (item, index) => {
            return (
              <div className="slider-item" key={index}>
                <div className="slider-image">
                  <img id="slider-img" src={item.image} alt="not found" />
                  <div className="content1">{item.content}</div>
                  <div className="time">OCT15|SUN|4:30PM</div>
                  <div className="name">{item.name}</div>
                  <div className="slider-heading">{item.heading}</div>
                </div>
              </div>
            );
          }
        )}
         <button className="slider-arrow left-arrow">{">"}</button>
      </div>
    </div>
  );
};

export default Sport;
