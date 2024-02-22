import React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp";


const Payfast = () => {
  return(
      <div className={"bg-background py-10"}>
         <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
        />
     </div>
  );
};
export default Payfast;