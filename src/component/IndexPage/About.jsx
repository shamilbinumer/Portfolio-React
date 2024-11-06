
import '../../assets/styles/global.css'
const About = () => {
  return (
    <div className="min-h-screen dark:bg-[#111834] bg-[#e9e9e9] p-8 sm:p-12 lg:p-[11rem] flex flex-col md:flex-row items-center">
      <div className="flex flex-col md:flex-row w-full">
        <div className="content-section w-full md:w-[60%] lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <h2 className="dark:text-[#ffff] font-semibold text-[28px] sm:text-[32px] lg:text-[40px] font-[jost]">
              <span className="dark:text-[#EAB308] text-[#00ada7]">01. </span>About Me
            </h2>
            <div className="line hidden md:block w-[100px] sm:w-[150px] lg:w-[300px] border-b dark:border-[#ffffff44]"></div>
          </div>
          <p className="dark:text-[#ffffffc2] text-[14px] sm:text-[15px] lg:text-[17px] font-[jost] mt-4 font-light">
            I am a passionate web developer with 1.5 years of experience specializing in the MERN stack. My expertise in React, Node.js, Express, and MongoDB enables me to build full-featured applications that are both scalable and efficient. I’ve successfully delivered projects ranging from e-commerce platforms to dynamic, data-driven websites, always prioritizing clean code and a seamless user experience. With a solid foundation in front-end and back-end development, I’m continuously expanding my skills to bring innovative solutions to every project I work on.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end w-full md:w-[40%] lg:w-1/2 mt-8 md:mt-0">
          <div className="relative w-[200px] sm:w-[250px] lg:w-[350px] h-[200px] sm:h-[250px] lg:h-[350px] rounded-[7px] about-pick-custome-border">
            <div className="about-image w-[200px] sm:w-[250px] lg:w-[350px] h-[200px] sm:h-[250px] lg:h-[350px] absolute left-[-5px] sm:left-[-10px] lg:left-[-20px] top-[-5px] sm:top-[-10px] lg:top-[-20px] rounded-[10px] overflow-hidden">
              <img src="/Images/about.jpg" alt="About Me" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

