import React, { useState, useEffect }  from "react";

import '../../App.css';


export default function Homicide(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return <div className="page-container">
        <h1>Homicides in the US</h1>
        <p>Gun Related Deaths</p>
        <iframe
        src='https://lookerstudio.google.com/embed/reporting/4855847d-e88f-4325-a7ef-622befead149/page/tEnnC'
        width={width > 600 ? "900" : "100%"}
        height={height > 700 ? "700" : "100%"}
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
   </div>

}
