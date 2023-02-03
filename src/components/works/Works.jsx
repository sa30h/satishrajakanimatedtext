import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Beauty Product Website",
      desc:
        "E-commerce website developed for beauty products. Clean and responsive design.",
      img:
      "assets/ProjectCollage/webApp/beautyproductcollage.jpeg",  
      link:"https://beauty-product.pages.dev/"
    },
    {
      id: 2,
      icon: "./assets/mobile.png",
      title: "EZ-Transfer",
      desc:
        "Ez Transfer is money transfer mobile app available on Google Play Store. User can send money using virtual wallet, Bank Cards and bank transfers.",
      img:
      "assets/ProjectCollage/mobileApp/eztransfercollage.jpeg" ,
      link:"https://play.google.com/store/apps/details?id=com.money.eztransfer&pli=1"

    },

    {
      id: "3",
      icon: "./assets/writing.png",
      title: "HDPlus RestAPI",
      desc:
        "Restful api for mobile applction.",
      img:
      "assets/ProjectCollage/RestAPI/hdplusapicollage.png"   ,
      link:"http://196.29.238.107/api/v1/hd+/logintable/"
 
    },
    {
      id: 4,
      icon: "./assets/mobile.png",
      title: "EZ-SwiftShop",
      desc:
        "Solution for shops to deliver groceries, food etc. Available on Google Play Store",
      img:
      "assets/ProjectCollage/mobileApp/ezswiftshopcollage.jpeg"    ,
      link:"https://play.google.com/store/apps/details?id=com.leanvia.ezswiftshops"

    },
    {
      id: 5,
      icon: "./assets/mobile.png",
      title: "HD PLUS",
      desc:
        "It's a iptv application also available on Google Play Store. User can watch television shows on mobile.",
      img:
      "assets/ProjectCollage/mobileApp/hdpluscollage.jpeg"   ,
      link:"https://play.google.com/store/apps/details?id=com.myhdplus"
 
    },
    
  ];


  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link} style={{textDecoration:"none",color:"black"}}>Visit</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
