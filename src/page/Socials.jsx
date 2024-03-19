import React from "react";
import IMG from '../assets/Glitch_logo.png'
import { Link } from "react-router-dom";


function Socials() {
  return (
    <>
      <div className="flex align-middle justify-center w-full  bg-white p-12">
        <Link to="/" >
        <img className="max-w-96" src={IMG} alt="GLitch-logo" />
        </Link>
        
      </div>

      <div className="h-96 w-full bg-white flex justify-center  ">
        <div className="flex items-center gap-10 m-2">
          <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href="https://www.linkedin.com/in/sahastamgbu/?originalSubdomain=in" target="_blank">
            <img className="h-12 w-12 bg-gray-200 rounded-full" src="data:image/png;base64,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" alt="linkedin" />
          </a>
        </div>
        <div className="flex items-center gap-10 m-2">
          <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href="https://www.instagram.com/glitch_gbu?igsh=dGl5cTI3bHRoaXVz" target="_blank">
            <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
          </a>
        </div>

        <div className="flex items-center gap-10 m-2">
          <a className="text-gray-700 hover:text-orange-600 " aria-label="Visit TrendyMinds Gmail" href="mailto:tech.fest@gbu.ac.in" target="_blank">
            <img className="h-14 w-14 bg-gray-200 rounded-full" src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" alt="Gmail" />
          </a>
        </div>

        <div className="flex items-center gap-10 m-2">
          <a className="text-gray-700 hover:text-orange-600 " aria-label="Visit TrendyMinds Watshapp" href="https://chat.whatsapp.com/F4a1KO6Kie0J0woc9ust4n" target="_blank">
            <img className="h-12 w-12 border " src="https://freelogopng.com/images/all_img/1661938371whatsapp-png-logo.png" alt="Whatshapp" />
          </a>
        </div>
      </div>
      <p className="w-full text-center text-sm text-gray-200 bg-white">
        Made by {" "}
        <a href="https://github.com/ashish-kus/" target="_blank">
          Ashish Kushwaha
        </a>
        {" "}&{" "}
        <a href="https://bento.me/k4r7ik" target="_blank">
          Kartik Kushwaha
        </a>
      </p>

    </>
  );
}

export default Socials;

