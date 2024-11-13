import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Uppercase was click");
        let newtext = text.toUpperCase(); 
        setText(newtext);
    }

    const handleLoClick = () => {
        console.log("Lowercase was click");
        let newtext = text.toLowerCase(); 
        setText(newtext);
    }

    const CopyText = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Succesfully copied");
    }
 
    const handleClear = () => {
        console.log("Clear");
        setText("");
    }
    const [text, setText] = useState('');
    // setText("new text");
  return (
    <>
<div className="container" style={{color: props.mode==='light'?'black':'white'}}>
<div className="mb-3">
    <h1>{props.head}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter text here' style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} ></textarea>
  </div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
<button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
</div>
<div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
    <h2>Your text summary</h2>
    <p>{(text.split("\n") && text.split(" ")).length-1} words, {text.length} characters, {text.split(".").length-1} sentences</p>
    <p>{0.008*text.split(" ").length} Minutess read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}

// TextForm.propTypes = {head: PropTypes.string.isRequired}
// TextForm.defaultProps = {head: "Text default head"}
