const Footer = () => {
    return ( 
        <section className="w-full max-h-auto bg-gray-900">
            <div className="md:flex md:justify-between px-7 py-7">
                 <div className="flex-col items-center">
                    <p className="text-2xl font-bold text-white">Phidaux Foundation</p>
                    <p className="text-white">Phidaux foundation, unveiling impossibilities </p>
                 </div>

                 <div className="mt-3">
                    <ul className="decoration-none underline-none text-xl ">
                        <li className=" hover:text-amber-300 hover:text-xl transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 list-none"><a href="">Home</a></li>
                        <li className=" hover:text-amber-300 "><a href="/about">About</a></li>
                        <li className=" hover:text-amber-300 "><a href="/projects">Projects</a></li>
                     
                    </ul>
                 </div>
                 <div className="text-white text-xl mt-3">
                    <p>CONTACT US </p>
                    <p className="hover:text-purple-500 transition-all ease-in-out duration-400">Email: <a href="mailto:phidauxa@gmail.com">phidauxa@gmail.com</a></p>
                    <p>Phone: 024 890 9983</p>
                 </div>
                 
            </div>
            <hr className="text-white py-10 mx-4"/>
        </section>
     );
}
 
export default Footer;