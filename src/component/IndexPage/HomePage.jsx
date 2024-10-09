import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";

const useTypingEffect = (words, typingSpeed = 120, deletingSpeed = 100, pauseTime = 800) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(current => {
        if (isDeleting) {
          return fullText.substring(0, current.length - 1);
        } else {
          return fullText.substring(0, current.length + 1);
        }
      });

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const HomePage = () => {
  const typedText = useTypingEffect([ 'Frontend Developer', 'Backend Developer', 'Full Stack Developer' ]);

  return (
    <div className="h-screen w-full bg-light-mode-bg dark:bg-dark-mode-bg bg-cover">
      <Navbar />
      <div className="flex flex-col md:flex-row px-6 md:px-20 lg:px-44">
        <div className="md:w-4/5 flex flex-col justify-center h-screen">
          <h5 className="font-[jost] text-lg md:text-xl dark:text-[#EAB308]">Hi, My Name Is</h5>
          <h1 className="font-[jost] text-4xl md:text-5xl lg:text-6xl font-semibold dark:text-white text-[#00ada7]">MOHAMMED SHAMIL</h1>
          <h2 className="font-[jost] text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="dark:text-white text-[#00ada7]">I am a </span>
            <span className="dark:text-[#EAB308]">{typedText}</span>
          </h2>
          <p className="text-[#373737] dark:text-[#9CA3AF] mt-4 text-sm md:text-base lg:text-lg">
            As a web developer, you're a digital architect, shaping online experiences with code. Your mastery of the MERN stack reflects your commitment to cutting-edge web development. With each line of code, you're building the future of the internet.
          </p>
        <button className='mt-4 float-start text-white border rounded-lg  w-[200px] h-[50px] font-[jost]'>Explore My Projects</button>
        <div></div>
        </div>

        {/* <div className="md:w-2/5 h-screen hidden md:block"></div> */}
      </div>
    </div>
  );
};

export default HomePage;
