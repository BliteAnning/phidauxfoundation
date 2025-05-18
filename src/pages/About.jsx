
import Footer from "../components/footer"
import logo from "../assets/image/logo.jpg"
import heldhands from '../assets/image/heldhands.jpg'
import illustration from '../assets/image/illustration.jpg'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section className="w-full min-h-screen  overflow-x-hidden">

            <div className="custom-background2 min-h-screen">
                <p className="sm:text-5xl text-3xl absolute bottom-20 left-24 font-extrabold text-white  mt-6">WANT TO KNOW MORE ABOUT US?</p>
            </div>
            <h1 className="flex items-center justify-center mt-20 text-4xl sm:texl-2xl sm:px-10 font-light"> <span className="text-4xl font-extrabold text-purple-900">"</span> Explore About us. Learn about our values, 
                history and vision. Phidaux foundation is aimed at promoting equality among children including the needy<span className="text-4xl font-extrabold text-purple-900">"</span> </h1>
            <div className="mt-20">
                <div className="bg-amber-400 ">
                <div className="flex flex-col sm:px-64 justify-center items-center ">
                    <h1 className="text-2xl   font-extrabold text-black">ABOUT US</h1>
                    <div className="sm:flex-row flex flex-col " >
                        <img src={logo} alt="Logo" className="sm:mx-4 mx-3 h-80 w-80 object-cover rounded-lg shadow-lg" />
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }} className="text-xl mt-6 text-slate-700 mx-7 font-semibold">Welcome to Phidaux Foundation, a non-governmental organization(NGO) dedicated to supporting and empowering individuals to overcome seemingly insummountable challeges. Our mission is to unveil impossibilities and create a brighter future for all.
                        </motion.p>
                    </div>

                </div>
                </div>
                <div className="bg-white mt-20 sm:px-64">
                <div className="  place-items-center">
                    <h1 className="text-2xl font-extrabold text-black">OUR <span className="text-3xl font-bold text-purple-900">HISTORY</span></h1>
                    <div className="flex flex-col sm:flex-row">

                        <motion.p initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }} className="text-xl mt-6 mx-7 text-slate-700 font-semibold">Phidaux foundation was founded in December 2020 by Phidaux Amankwaa, driven by passion to make a positive impact in the lives of others. Our journey began with a simple yet profound question: "What if the possible was possible?" 
                            This inquiry sparked a movement, inspiring us to challenge conventional wisdom and push beyond perceived Limits.
                        </motion.p>
                        <img src={heldhands} alt="about" className=" h-80 w-96 object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
                </div>
                <div className="bg-orange-300 sm:px-64">
                <div className="place-items-center ">
                    <p className="text-2xl font-extrabold text-black">OUR <span className="text-purple-700">MISSION</span></p>
                    <div className="gap-3 sm:flex-row flex flex-col mt-8">
                        <img src={illustration} alt="about" className=" sm:mx-4 mx-4 h-80 w-80 object-cover rounded-lg shadow-lg" />
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }} className="text-xl mt-6 mx-4 sm:mx-7 text-slate-700 font-semibold">
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

                <div className=" mt-14 place-items-center sm:px-64 mb-10 rounded-xl border-black shadow-2xl">
                    <h1 className="text-xl font-bold">OUR <span className="text-green-500">VALUES</span></h1>
                    <div className="sm:p-6">
                        We are guided by the following core values:
                        <ul>
                            <li className="text-lg font-semibold">Empathy: We strive to understand and address the needs of those we serve.</li>
                            <li className="text-lg font-semibold">Integrity: We uphold the highest standards of honesty and transparency in all our actions.</li>
                            <li className="text-lg font-semibold">Collaboration: We believe in the power of teamwork and partnerships to achieve our goals.</li>
                            <li className="text-lg font-semibold">Empowerment: We believe in the potential of individuals and communities to drive change</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default About;