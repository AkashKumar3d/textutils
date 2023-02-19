import React, {useState} from 'react'

export default function TextForm(props) {
    // function for change event 
   let handleonchange=(event)=>{
    console.log("you are change the text ")
    settext(event.target.value)    // jab tak ham value ko target nahi karenge tab tak ham text area ke ander change nahi kar payenge 
   }
    
//    function to click event for uppercase 
const handleUpClick=()=>{
  // console.log("you are clicked ")
  let newtext=text.toUpperCase()
  settext(newtext)
  props.showalert("Uppercase Enable","success")
 }

   //    function to click event for lower case 
   let handlelowerClick=()=>{
    // console.log("you are clicked ")
    let newtext=text.toLowerCase()
    settext(newtext)
    props.showalert("Lowercase Enable","success")
    
   }

//    remove the text function
   let handleclearClick=()=>{
  let newtext=""
  settext(newtext)
  props.showalert("clear the text","success")
   }

//    download function
   let downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('mybox').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    props.showalert("download the text", "success")
  }

//   copy  function 
  let handletocopytext=()=>{
    console.log("copy function ")
    let text=document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showalert("copy the text","success")
  }

//   function for remove the extra space 
  let handletoextraspace=()=>{
    console.log("remove function for extra space ")
    let newtext=text.split(/[ ]+/)
    settext(newtext.join(" "))
    props.showalert("remove extra space the text","success")
  }

//   states create here 
    const [text, settext]= useState("")
  return (
    <>
    <div>
      <h1 className={`my-2 text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</h1> 
      <textarea  className={`form-control  text-${props.mode==="light"?"dark":"light"} `} style={{backgroundColor: props.mode==="dark"?"#195268":"white", color: props.mode==="light"?"dark":"light" }} value={text} id="mybox" onChange={handleonchange} placeholder="Enter the text here" rows="10"></textarea>
      <button disabled={text.length===0}  type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handlelowerClick}>LowerCase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>clear</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={downloadTxtFile}>Download</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handletocopytext}>Copy</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handletoextraspace}>Remove space</button>
    </div>

    <div className="container">
        <h2 className={`text-${props.mode==="light"?"dark":"light"}`}>The Text Summary</h2>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text.length===0? 0:text.split(" ").length} words and {text.length} character</p>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text.length===0? 0:(0.008)*text.split(" ").length} minutes </p>
        <h3 className={`text-${props.mode==="light"?"dark":"light"}`}>Preview</h3>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text.length>0?text:"Nothing to preview "}</p>
    </div>
    </>
  )
}
