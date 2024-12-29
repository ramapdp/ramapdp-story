import { FaLocationArrow } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';
import { InfoSections } from './ui/InfoSections';

const listInfoSection = [
   {
      id: 1,
      title: 'Github',
      linkName: 'github.com/ramapdp',
      linkHref: 'https://github.com/ramapdp',
      icon: <FaGithub />,
   },
   {
      id: 2,
      title: 'Gmail',
      linkName: 'ramasatelit484@gmail.com',
      linkHref:
         'https://mail.google.com/mail/?view=cm&fs=1&to=ramasatelit484@gmail.com',
      icon: <SiGmail />,
   },
   {
      id: 3,
      title: 'LinkedIn',
      linkName: 'linkedin.com/in/rama-pratama',
      linkHref: 'https://www.linkedin.com/in/rama-pratama/',
      icon: <FaLinkedinIn />,
   },
];

const Hero = () => {
   return (
      <div className="min-h-screen h-screen flex items-center justify-center">
         {/**
          *  UI: Spotlights
          *  Link: https://ui.aceternity.com/components/spotlight
          */}
         {/* <div>
            <Spotlight
               className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
               fill="white"
            />
            <Spotlight
               className="h-[80vh] w-[50vw] top-10 left-full"
               fill="purple"
            />
            <Spotlight
               className="left-80 top-28 h-[80vh] w-[50vw]"
               fill="blue"
            />
         </div> */}

         {/**
          *  UI: grid
          *  change bg color to bg-black-100 and reduce grid color from
          *  0.2 to 0.03
          */}
         {/* Radial gradient for the container to give a faded look */}
         <div
            className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
         >
            <div
               // change the bg to bg-black-100, so it matches the bg color and will blend in
               className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
         </div>

         <div className="flex flex-col gap-32 justify-center items-center w-full relative z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
               <div className="rounded-full h-32 w-32 md:h-48 md:w-48 lg:h-52 lg:w-52 overflow-hidden">
                  <Image
                     src="/my-profile.svg"
                     alt="Adrian"
                     width={200}
                     height={200}
                     className="rounded-full object-cover"
                  />
               </div>

               {/**
                *  Link: https://ui.aceternity.com/components/text-generate-effect
                *
                *  change md:text-6xl, add more responsive code
                */}
               <TextGenerateEffect
                  words="Ramadhani Putra Difa Pratama"
                  className="text-center text-[40px] md:text-5xl lg:text-6xl"
               />

               <p className="text-center md:tracking-wider mb-4 text-[#f7f7f5] opacity-50 text-sm md:text-lg lg:text-2xl">
                  Frontend Web Developer
               </p>

               <a href="" className='hover:scale-[102%]'>
                  <MagicButton
                     title="Start Exploring"
                     icon={<FaLocationArrow />}
                     position="right"
                  />
               </a>
            </div>
            <div className="py-10 flex items-end w-full justify-center gap-10">
               {listInfoSection.map((info) => (
                  <InfoSections
                     key={info.id}
                     title={info.title}
                     linkName={info.linkName}
                     linkHref={info.linkHref}
                     icon={info.icon}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Hero;
