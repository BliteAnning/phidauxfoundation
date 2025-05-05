import NavBar from "../components/NavBar"
import { motion } from "framer-motion";
import { SlideDown, SlideLeft, SlideRight, SlideUp } from "../../animate";
const Home = () => {
    return (
        <section className="custom-background w-full h-screen ">
            
            <div className="text-white text-center gap-2 items-center flex flex-col text-2xl">
                <motion.p 
                variants={SlideDown(0.7)} 
                initial="hidden" 
                animate="visible" 
                className="text-4xl text-green-500 font-bold"
                >Unveiling Impossibilities</motion.p>

                <motion.p variants={SlideUp(0.2)} initial="hidden" animate="visible">Give a helping hand to those who need it</motion.p>
                <motion.p variants={SlideUp(0.2)} initial="hidden" animate="visible">When a child gets access to good food, it can change just about everything</motion.p>
            </div>



        </section>
    );
}

export default Home;