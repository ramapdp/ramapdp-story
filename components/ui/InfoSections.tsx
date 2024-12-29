import React from 'react';

export const InfoSections = ({
   title,
   linkName,
   linkHref,
   icon,
}: {
   title: string;
   linkName: string;
   linkHref: string;
   icon: React.ReactNode;
}) => {
   return (
      <div className="flex w-1/3 items-center p-2 gap-5">
         <div className="bg-[#191919] p-4 flex items-center justify-center rounded-full text-[38px]">
            {icon}
         </div>
         <div>
            <h1 className="text-2xl font-normal">{title}</h1>
            <a
               href={linkHref}
               className="flex items-center hover:underline hover:decoration-purple"
               target="_blank"
               rel="noopener noreferrer"
            >
               <p className="text-purple">{linkName}</p>
            </a>
         </div>
      </div>
   );
};
