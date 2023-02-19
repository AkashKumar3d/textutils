import React, {useState} from 'react'


export default function Aboutus() {

  let [oldstyle , setstyle]=useState({
    color: "black",
    backgroundColor: "white"
  })

  let [btntext, newbtntext]= useState("enable dark mode")

  let handleonclick=()=>{
    if (oldstyle.color==="black") {
      setstyle({
        color:"white",
        backgroundColor: "#195268",
        border: "1px solid black "
      })
      newbtntext("Enable light mode")
      
    } else {
      setstyle({
      color:"black",
      backgroundColor: "#195268"

    })
    newbtntext("Enable dark mode")
    }
  }
  return (
  <>
  <div className="container my-3">
  <div className="accordion" style={oldstyle}  id="accordionExample">
  <h1 className='mx-3' >About us </h1>
  <div className="accordion-item"style={oldstyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={oldstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <strong>Analyze to text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Text analysis is really the process of distilling information and meaning from text. For example, this can be analyzing text written in reviews by customers on a retailer's website or analysing documentation to understand its purpose.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={oldstyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={oldstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      A copyright-free image is provided by a photographer or owner, and can be used by any person. The photographer or owner owns the copyright but provides the legal authority that the image can be freely used by others. You can usually find copyright-free images on public domains or copyright-free image libraries.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={oldstyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={oldstyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         <strong>Browser Compatable</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The term browser compatibility refers to the ability of a certain website to appear fully functional on different browsers that are available in the market. This means that the website's HTML coding, as well as the scripts on that website, should be compatible to run on the browsers.
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary my-2" onClick={handleonclick}>{btntext}</button>
</div>
  </>
  )
}
