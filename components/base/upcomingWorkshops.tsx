import React from "react";
import ButtonGroupWorkshops from "./buttonGroupWorkshops";



interface WorkshopProps {
  date: string;
  day: string;
  name: string;
  time: string;
  instructor: string;
  description: string;
  price: string;
  spotsLeft: string;
  bookLink: string;
  learnMoreLink: string;
}

const WorkshopItem: React.FC<WorkshopProps> = ({
  date,
  day,
  name,
  time,
  instructor,
  description,
  price,
  spotsLeft,
  bookLink,
  learnMoreLink,
}) => (
  <div className="flex font-helvetica space-x-8 text-sm py-6">
    <div className="font-helvetica text-2xl font-bold">{day}</div>
    <div className="text-start">
      <p className="text-xl font-helvetica font-bold text-textColor">{name}</p>
      <div className="flex row space-x-4">
        <p className="text-secondary text-xs py-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
          {time}
        </p>
        <p className="text-secondary text-xs py-1 inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
          {instructor}
        </p>
      </div>
      <p className="font-normal text-white py-2">{description}</p>
      <p className="font-bold text-primary text-start text-[16px] pt-4">{price}</p>
      <p className="text-secondary py-1">{spotsLeft}</p>
      <ButtonGroupWorkshops bookLink={bookLink} learnMoreLink={learnMoreLink} />
    </div>
  </div>
);

const UpcomingWorkshops: React.FC = () => {
  return (
    <div className="font-medium text-primary text-center md:text-left px-10 py-14 bg-background">
      
      <WorkshopItem
        date="January"
        day="31"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/about"
        learnMoreLink="/about"
      />


      <WorkshopItem
        date="February"
        day="20"
        name="Workshop Name"
        time="3 hours"
        instructor="Parson Gapa"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem."
        price="R1,200.00"
        spotsLeft="2 Spots Left"
        bookLink="/about"
        learnMoreLink="/about"
      />

<WorkshopItem
        date="March"
        day="3"
        name="CNC Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem."
        price="R1,300.00"
        spotsLeft="2 Spots Left"
        bookLink="/about"
        learnMoreLink="/about"
      />

    </div>
  );
};

export default UpcomingWorkshops;
