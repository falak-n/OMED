import "./featured.css"

const Featured =()=>{
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src="https://www.fodors.com/wp-content/uploads/2018/09/HERO__YervanArmenia_HERO_shutterstock_1100127689_1.jpg" className="featuredImg"/>
                 <div className="featuredTitles">
                     <h1>Armenia</h1>
                     
                 </div>
            </div>
            <div className="featuredItem">
              <img
                  src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Baku.jpg?tr=w-400"
                  alt=""
                        className="featuredImg"
              />
             <div className="featuredTitles">
               <h1>Azerbaijan</h1>
              
            </div>
           </div>
           <div className="featuredItem">
              <img
                src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1904889901.jpg"
                alt=""
                 className="featuredImg"
              />
             <div className="featuredTitles">
                  <h1>Saudi Arabia</h1>
                 
             </div>
          </div>
           
        </div>
    )
}
export default Featured