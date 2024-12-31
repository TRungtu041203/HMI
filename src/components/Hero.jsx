import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <span className='text-[#915EFF]'>HMI Project</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Course: AC4150E - ET - E16 <br className='sm:block hidden' />
            Instructors: 
            <ul className= 'list-none mt-2'>
              <li> - Assoc Prof. Thanh-Hai Tran</li>
              <li> - PhD. Viet-Tung Nguyen</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center mt-80">
      <h1 className="text-green-500 text-8xl font-bold text-center">
          Gymmify - HomeFitness
      </h1>
      </div>
    
    </section>
  );
};

export default Hero;
