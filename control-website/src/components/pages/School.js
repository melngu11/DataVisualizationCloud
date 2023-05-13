import React, { useState, useEffect }  from "react";

import '../../App.css';


export default function School(){
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
        <h1>School Shootings</h1>
        <p>Events Since 2009</p>
        <iframe
        src="https://lookerstudio.google.com/embed/reporting/8859dfe4-2581-4407-8dcd-4e02faf2e9b4/page/NZDQD" 
        width={width > 600 ? "900" : "100%"}
        height={height > 700 ? "700" : "100%"}
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
   </div>

}



// <iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/8859dfe4-2581-4407-8dcd-4e02faf2e9b4/page/NZDQD" frameborder="0" style="border:0" allowfullscreen></iframe>
