import React from 'react';

interface HeaderTitleProps {
  title: string;
  description: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, description }) => {
  return (
    <div className="2xl:mx-40 xl:mx-60 lg:mx-40 md:mx-16 px-6">
      <h1 className="text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight">{title}<span className="text-primary">.</span></h1>
      <p className="text-BodyText text-textColor text-center font-helvetica font-normal 2xl:px-60">
        {description}
      </p>
    </div>
  );
};

export default HeaderTitle;
