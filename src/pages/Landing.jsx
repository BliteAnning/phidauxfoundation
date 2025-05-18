
import Footer from "../components/footer";
import Home from "../components/Home";
import Programs from "../components/Programs";

const Landing = ({setShowDonate}) => {
 
    return ( 
        <section id="landingPage" className="min-h-screen overflow-x-hidden" > 
            
            <Home/>
            <Programs setShowDonate={setShowDonate}/>
            <Footer/>
        </section>
     );
}
 
export default Landing;