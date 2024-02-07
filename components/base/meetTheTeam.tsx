import React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp"


export const MeetTheTeam = () => {
    return(
        <div className="bg-background py-8">
                        <h1 className={"text-headings text-secondary font-helvetica font-bold py-16 text-center"}>Meet the Team<span className="text-primary">.</span></h1>
         
            <div className="bg-[#2c3033] rounded-xl mx-6">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with 'real' content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as 'fill text'.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </p>
             </div>
           </div>

           <div className="bg-[#2c3033] rounded-xl mx-6">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with 'real' content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as 'fill text'.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </p>
             </div>
           </div>
       </div>
    )
}