import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-card-pattern rounded-[20px] py-5 px-10 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] mt-20 font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <section id="about">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[#FFFFFF] text-[17px] max-w-3xl leading-[30px]'
      >
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tempore alias consectetur quisquam optio, ea dolorem sunt
        nemo iste repellat adipisci! Earum quis quos nulla quam, aspernatur eligendi minus natus! </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione delectus libero repellat sunt nam dolores amet, minus dicta reiciendis illum recusandae perspiciatis totam nobis modi, 
        asperiores obcaecati porro veritatis exercitationem?</p><br/>
      Join us today and become a part of something greater than yourself. Together, we can make a positive impact and create a better future for everyone.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
