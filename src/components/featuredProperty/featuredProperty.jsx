import "./featuredProperty.css";

const FeaturedProperty = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cdn.siasat.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-15-at-10.26.17-AM-3.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Umrah Special Offer</span>
        <span className="fpCity">Mecca 2 nights</span>
        <span className="fpPrice">Starting from U$120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://w0.peakpx.com/wallpaper/956/190/HD-wallpaper-mecca-madina-during-evening-time-ramzan.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Makkah-DoubleTree by Hilton</span>
        <span className="fpCity">Mecca 3 nights</span>
        <span className="fpPrice">Starting from U$140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/328/159/desktop-wallpaper-mecca-1920x1080-makkah-and-madina.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Madina Le-Meridien</span>
        <span className="fpCity">Madinah 2 nights</span>
        <span className="fpPrice">Starting from U$129</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bVFaY1L3qtDNCUbcrufPvrSkKxQJJ7ZO-cPdlQ7O3wUjRTIJXAMN6VUY89k6ltnf6vw&usqp=CAU"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mecca and Madinah</span>
        <span className="fpCity">Mecca 2 nights,Madinah 3 nights</span>
        <span className="fpPrice">Starting from U$105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;