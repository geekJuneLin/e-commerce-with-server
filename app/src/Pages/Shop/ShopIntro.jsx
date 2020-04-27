import React, { useEffect } from "react";
import "./style.css";

export default function ShopIntro() {
  var slides;
  var showIndex = 1;

  useEffect(() => {
    slides = document.getElementsByClassName("carousel-slide");
    showSlideAtIndex(showIndex);
  });

  // automatically change slides
  const autoShow = () => {
    showSlideAtIndex(1);
    setTimeout(autoShow, 7500);
  };

  // display the slide at index i
  const showSlideAtIndex = (i) => {
    showIndex += i;
    if (showIndex > slides.length) {
      showIndex = 1;
    }
    if (showIndex < 1) {
      showIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[showIndex - 1].style.display = "block";
  };

  // change the current displaying slide index
  const increamentSlideIndex = (e) => {
    const elementId = e.target.id;
    switch (elementId) {
      case "prev":
        showSlideAtIndex(-1);
        break;
      case "next":
        showSlideAtIndex(1);
        break;
      default:
        break;
    }
  };

  return (
    <section className="shop-intro">
      {/* carousel container */}
      <div className="carousel-container">
        {/* carousel slide */}
        <div className="carousel-slide fade">
          <img
            src="https://www.10wallpaper.com/wallpaper/1366x768/1910/iPhone_11_Pro_Max_Apple_2019_High_Quality_Desktop_1366x768.jpg"
            alt="slide-img"
          />
          <div className="carousel-slide-title">
            <h1>Learn more about new iPhone 11 Pro</h1>
          </div>
        </div>

        <div className="carousel-slide fade">
          <img
            src="https://s15543.pcdn.co/wp-content/uploads/2020/02/S20-5G_KV_3-1_HERO-e1581461895653.jpg"
            alt="slide-img"
          />
          <div className="carousel-slide-title">
            <h1>Learn more about new Samsung S20</h1>
          </div>
        </div>

        <div className="carousel-slide fade">
          <img
            src="https://fscl01.fonpit.de/userfiles/7446224/image/xiaomi-mi-note-10/xiaomi-mi-note-10-group2.jpg"
            alt="slide-img"
          />
          <div className="carousel-slide-title">
            <h1>Learn more about new XiaoMi 10</h1>
          </div>
        </div>

        {/* next and prev buttons */}
        <a className="prev" id="prev" onClick={increamentSlideIndex}>
          <i className="fas fa-arrow-circle-left"></i>
        </a>
        <a className="next" id="next" onClick={increamentSlideIndex}>
          <i className="fas fa-arrow-circle-right"></i>
        </a>
      </div>
    </section>
  );
}
