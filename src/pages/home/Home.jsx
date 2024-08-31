import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import "./home.css"


import Featured from "../../components/featured/featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperty/featuredProperty";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer"

const Home=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
                 <h1 className="homeTitle">Top Destinations</h1>
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests Love</h1>
                <FeaturedProperty/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default Home;