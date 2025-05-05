
import Footer from "../components/footer"
import logo from "../assets/image/logo.jpg"
import heldhands from '../assets/image/heldhands.jpg'
import illustration from '../assets/image/illustration.jpg'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section className="w-full min-h-screen ">

            <div className="custom-background2 min-h-screen">
                <p className="text-5xl absolute bottom-20 left-24 font-extrabold text-white  mt-6">WANT TO KNOW MORE ABOUT US?</p>
            </div>
            <h1 className="flex items-center justify-center"> Explore About us. Learn about our values, history and vision</h1>
            <div className="mt-20">
                <div className="bg-amber-400 sm:px-64">
                <div className=" grid  place-items-center ">
                    <h1 className="text-2xl font-extrabold text-black">ABOUT US</h1>
                    <div className="sm:flex " >
                        <img src={logo} alt="Logo" className="mx-4 h-80 w-80 object-cover rounded-lg shadow-lg" />
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }} className="text-xl mt-6 text-slate-700 mx-7 font-semibold">Welcome to Phidaux Foundation, a non-governmental organization(NGO) dedicated to supporting and empowering individuals to overcome seemingly insummountable challeges. Our mission is to unveil impossibilities and create a brighter future for all.
                        </motion.p>
                    </div>

                </div>
                </div>
                <div className="bg-blue-500 sm:px-64">
                <div className="  place-items-center">
                    <h1 className="text-2xl font-extrabold text-black">OUR HISTORY</h1>
                    <div className="sm:flex gap-3 py-8">

                        <motion.p initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }} className="text-xl mt-6 mx-7 text-slate-700 font-semibold">Phidaux foundation was foundedin December 2020 by Phidaux Amankwaa, driven by passion to make a positive impact in the lives of others. Our journey began with a simple yet profound question: "What if the possible was possible?" This inquiry sparked a movement, inspiring us to challenge conventional wisdom and push beyond perceived Limits.
                        </motion.p>
                        <img src={heldhands} alt="about" className=" h-80 w-96 object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
                </div>
                <div className="bg-orange-300 sm:px-64">
                <div className="place-items-center ">
                    <p className="text-2xl font-extrabold text-black">OUR MISSION</p>
                    <div className="gap-3 sm:flex mt-8">
                        <img src={illustration} alt="about" className=" mx-4 h-80 w-80 object-cover rounded-lg shadow-lg" />
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }} className="text-xl mt-6 mx-7 text-slate-700 font-semibold">
                            <p>
                                At Phidaux Foundation, we believe that everyone deserves access to resources, opportunities, and support to thrive. Our mission is to :
                            </p>
                            <ul className="">
                                <li>Provide aid and assistance to vulnerable communities</li>
                                <li>Empower individuals through education, training and mentorship</li>
                                <li>Foster collaboration and partnerships to drive positive change</li>
                                <li>Challenge impossibilities and push the boundaries of what is possible</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                </div>

                <div className=" mt-14 place-items-center sm:px-64 mb-10 rounded-xl border-1 bg-green-200 shadow-lg">
                    <h1 className="text-xl font-bold">OUR VALUES</h1>
                    <div className="p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Recusandae maxime incidunt pariatur nisi voluptatum obcaecati perspiciatis neque voluptatibus totam. Aut adipisci ipsam porro tenetur molestias optio, blanditiis eligendi quis praesentium.</div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default About;