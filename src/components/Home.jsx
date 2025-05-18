import NavBar from "../components/NavBar"
import { motion } from "framer-motion";
import landing from '../assets/image/landing.jpg'
import { SlideDown, SlideLeft, SlideRight, SlideUp } from "../../animate";
import { useNavigate } from "react-router";
const Home = () => {
    const navigate= useNavigate();


    return (
        <section className=" flex flex-col sm:flex-row bg-black h-screen ">
            
            <div className="w-full sm:w-1/2">
                
                <img src={landing} alt="img" className="object-cover h-full w-full"/>
                
            </div>
                
            <div className="w-full sm:w-1/2 px-4">
                <div className="flex flex-col mt-32 justify-center items-center">
                <motion.p 
                variants={SlideDown(0.7)} 
                initial="hidden" 
                animate="visible" 
                className="text-4xl text-green-500  font-bold"
                >Unveiling Impossibilities</motion.p>
                <motion.p variants={SlideUp(0.2)} initial="hidden" animate="visible" className="text-white font-light text-xl">Give a helping hand to those who need it</motion.p>
                 <div className="flex gap-3 mt-5">
                    <button onClick={()=>navigate('/projects')} className="bg-green-500 border-green-500 rounded-xl p-3 font-extrabold hover:bg-white transition-all ease-in-out duration-500 hover:text-green-500">Explore our Projects</button>
                    <button onClick={()=>navigate('/about')} className=" hover:border-white text-white rounded-xl p-3 hover:bg-white transition-all ease-in-out duration-500 hover:text-black">Learn more about us</button>
                 </div>
                </div>
            </div>



        </section>
    );
}

export default Home;