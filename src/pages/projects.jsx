import Footer from "../components/footer";

import carly from "../assets/image/img11.jpg"
import saakrom from "../assets/image/img7.jpg"
import samproso from '../assets/image/samproso.jpg'
import cherubs from '../assets/image/img10.jpg'
import { motion } from "framer-motion";

const projects = [
    {
      id: 1,
      title: "CHERUBS CHILDREN'S HOME, SANTASI APIRE",
      description:
        "I was drawn to the attention that the children in foster care were lacking some basic amenities and needs so I discussed with my friends and family how possible we can put smiles on their faces during Christmas in December 2021. We structured a way to grant funds to make the dream turn reality. Through the support of family and friends we were able to generate funds to support the project. We donated toiletries, soap, detergents, bottle water, cement and many more. ",
      image: cherubs,
    },
    {
      id: 2,
      title: "SAMPROSO M/A PRIMARY",
      description:
        "I got a call from one of their tutor who happens to be my cousin. He expressed an interest of Phidaux Foundation exploring the school and also assisting them with the needs of the students mostly at the elementary level. We went as a team and witnessed the school and identified their problems. We donated books, uniforms, stationery materials and also marker boards and markers. We had an excellent educational talk with them in line with career pathways. This project happened in January 2022.",
      image: samproso,
    },
    {
      id: 3,
      title: "CHARLY CARE CHILDREN'S HOME, KUNTASE",
      description:
        "I had an encounter with the founder of the foster home and she told me their problems. So I decided to talk to my friends to figure out how to solve the problems. Fast forward, we planned on how to get the financial resources to help the orphans. It was so enjoyable and encouraging to see us put a smile on the face of daunting orphans. This project happened in December 2023 at Kuntase in the Ashanti Region of Ghana. ",
      image: carly,
    },
    {
      id: 4,
      title: "SAAKROM 2025",
      description:
        "It is a small village with more than 60 pupils and 200 adolescents in the upper elementary and middle school. There was any source of good education in the community. The most successful people in the community are farmers so the youth don't see the essence of going to school but rather involve themselves in farming. The students are not motivated to study at all, so as a Young Philanthropist and Educational Advocate we collaborated with Smile Home Ghana Foundation and Modern-Day Humanitarian to help the people in Saakrom. We used the whole 2024 to make sure we have unveiled the impossibilities in Saakrom. It was easy at all but with the help of God and the whole team, the Saakrom project was a success. We had the project in January 2025. We are most grateful to God Almighty and to my able team to their unwavering support and counseling services in making the dream turn out to be a reality. .",
      image: saakrom,
    },
  ];
  
  const ProjectList = () => {
    return (
        
      <div className="bg-amber-100 w-full min-h-screen">
        
        <h2 className="text-3xl font-bold  text-amber-500 mt-20 text-center mb-8">
          Our Donation Projects
        </h2>
        <div className="px-8 mt-5 ">
          {projects.map((project) => (
            <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
              key={project.id}
              className="bg-white  shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-72 object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-600 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-700  mt-3 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default ProjectList;
  