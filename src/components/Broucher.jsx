import React from "react";
import BROUCHER from "../assets/Glitch-Brochure.pdf";

const Broucher = () => {
 return (
 <div>
  <object data={BROUCHER} type="application/pdf" className="w-full h-screen"> </object> 
 </div>
 );
};
export default Broucher;
