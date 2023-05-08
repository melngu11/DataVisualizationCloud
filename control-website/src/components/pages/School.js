import React from "react";
import * as Plot from "@observablehq/plot";
import PlotFigure from "../PlotFigure";
import schools from  "../data/schools.json";
import '../../App.css';


export default function School(){
    return <div className="page-container">
        <h1>School Shootings</h1>
    <div className="plot-bar">
    <PlotFigure
        options={{
          marks: [
            Plot.barY(schools, { x: "year", y: "count", fill: "black"})
          ]
        }}
      />
    </div>
   </div>

}

