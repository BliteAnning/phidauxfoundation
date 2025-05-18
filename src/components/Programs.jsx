import { SlideLeft, SlideRight } from "../../animate";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/image/img1.jpg"
import img2 from "../assets/image/img2.jpg"
import img3 from "../assets/image/img10.jpg"
import img4 from "../assets/image/img11.jpg"
import img5 from "../assets/image/img5.jpg"
import logo from "../assets/image/logo.jpg"
import ParticleBg from "../particleBg";
import { useNavigate } from "react-router";


const Programs = ({setShowDonate}) => {
    const navigate = useNavigate();

    return (
        <section className=" finisher-header flex flex-col gap-20 bg-gradient-to-l from-gray-200 to-white">
            <ParticleBg/>
            <motion.section
                className="md:flex px-5 items-center justify-center gap-8 sm:px-64"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }} // Animates when 30% of section is visible
            >
                {/* Image Section - Slides from Left */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src={img1} alt="Event" className="h-80 w-80 object-cover rounded-lg shadow-lg" />
                </motion.div>

                {/* Text Section - Slides from Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-md"
                >
                    <h1 className="text-3xl font-bold text-gray-800">Saakrom 2025 was Epic</h1>
                    <p className="text-gray-600 mt-4">
                        It is a small village with more than 60 pupils and 200 adolescents in the upper elementary and middle school. There was any source of good education in the community. 
                        The most successful people in the community are farmers so the youth don't see the essence of going to school but rather involve themselves in farming. The students are not motivated to study at all, so as a Young Philanthropist and Educational Advocate we collaborated with Smile Home Ghana Foundation and Modern-Day Humanitarian to help the people in Saakrom. 
                        We used the whole 2024 to make sure we have unveiled the impossibilities in Saakrom. 
                    </p>

                    {/* Styled Button */}
                    <motion.button
                        className="mt-6 px-6 py-3 text-white bg-green-600 rounded-lg text-lg font-medium shadow-md 
                        transition-all duration-300 cursor-pointer ease-in-out transform hover:scale-105 hover:bg-green-700 
                        active:scale-95"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick = {() => navigate("/projects")} 
                    >
                        Read More
                    </motion.button>
                </motion.div>
            </motion.section>

            <motion.section
                className="md:flex items-center px-5 justify-center gap-8 sm:px-64"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
            >

                {/* Text Section - Slides from Right */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-md"
                >
                    <h1 className="text-3xl font-bold text-gray-800">We are Tender Charity Foundation</h1>
                    <p className="text-gray-600 mt-4">
                        Phidaux foundation was founded in December 2020 by Phidaux Amankwaa, driven by passion to make a positive impact in the lives of others. 
                        Our journey began with a simple yet profound question: "What if the possible was possible?" This inquiry sparked a movement, inspiring us to challenge conventional wisdom and push beyond perceived Limits.
                    </p>


                    <motion.button
                        className="mt-6 px-6 py-3 text-white bg-green-600 rounded-lg text-lg font-medium shadow-md 
                        transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 
                        active:scale-95"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/about")}
                    >
                        Discover More
                    </motion.button>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src={img2} alt="Tender Charity Foundation" className="h-80 w-80 object-cover rounded-lg shadow-lg" />
                </motion.div>
            </motion.section>

            <section className="bg-black ">
                <h1 className="mt-5 flex justify-center items-center text-xl sm:text-3xl font-light text-white"> <span className="text-3xl text-green-600">Explore</span> our projects in the recent years</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 sm:px-64 py-8">
                {/** Card 1 **/}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img src={img3} alt="Saakrom 2025" className="h-48 w-48 object-cover rounded-lg" />
                    <h2 className="text-2xl font-bold mt-4">Cherubs </h2>
                    <p className="text-gray-600 mt-2">
                        Cherubs was a success. We were able to fundraise an amount to put smiles on the kids' faces
                    </p>
                    <div className="flex justify-between w-full mt-4 text-gray-700">
                        <p>Goal: <span className="font-bold text-green-600">$2000</span></p>
                        <p>Raised: <span className="font-bold text-blue-600">$500</span></p>
                    </div>
                    <motion.button
                        className="mt-4 px-6 py-2 text-white bg-green-600 rounded-lg text-lg font-medium shadow-md 
                        transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDonate(true)}
                    >
                        Donate
                    </motion.button>
                </motion.div>

                {/** Card 2 **/}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img src={img4} alt="Saakrom 2025" className="h-48 w-48 object-cover rounded-lg" />
                    <h2 className="text-2xl font-bold mt-4">Charly Home</h2>
                    <p className="text-gray-600 mt-2">
                        Another successful donation. Read more about the charly home donation in the project section
                    </p>
                    <div className="flex justify-between w-full mt-4 text-gray-700">
                        <p>Goal: <span className="font-bold text-green-600">$2000</span></p>
                        <p>Raised: <span className="font-bold text-blue-600">$900</span></p>
                    </div>
                    <motion.button
                        className="mt-4 px-6 py-2 text-white bg-green-600 rounded-lg text-lg font-medium shadow-md 
                        transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDonate(true)}
                    >
                        Donate
                    </motion.button>
                </motion.div>

                {/** Card 3 **/}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img src={img5} alt="Saakrom 2025" className="h-48 w-48 object-cover rounded-lg" />
                    <h2 className="text-2xl font-bold mt-4">Saakrom 2025</h2>
                    <p className="text-gray-600 mt-2">
                        This is our recent donation. Saakrom was one of the most interesting places to be at.
                    </p>
                    <div className="flex justify-between w-full mt-4 text-gray-700">
                        <p>Goal: <span className="font-bold text-green-600">$2000</span></p>
                        <p>Raised: <span className="font-bold text-blue-600">$700</span></p>
                    </div>
                    <motion.button
                        className="mt-4 px-6 py-2 text-white bg-green-600 rounded-lg text-lg font-medium shadow-md 
                        transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDonate(true)}
                    >
                        Donate
                    </motion.button>
                </motion.div>
            </div>
            </section>

            <motion.section
                className="sm:flex items-center justify-center gap-8 p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <img src={logo} alt="join-us" className="object-cover h-80 w-80 rounded-lg" />
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-md">
                    <h1>Wanna Join Us?</h1>
                    <p>Join us today and let's make the world a better place for underprivileged children and to
                        women to live. 
                    </p>
                    <button className="border-green-600 p-4 hover:bg-green-800 transition-all ease-in-out duration-400 rounded-lg bg-green-600 cursor-pointer"> <a href="mailto:phidauxa@gmail.com">Click to send us an email</a>  </button>
                </motion.div>
            </motion.section>
        </section>
    );
}

export default Programs;