import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked")
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        // console.log("UpperCase was Clicked")
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const clearText = () => {
        setText("")
        props.showAlert("Text Cleared", "success")
    }

    const [text, setText] = useState('');
    // text = "new text" //Wrong way to change the state
    // setText("new text") // Correct way to change the state
    function countWords(text) {
        const arr = text.split(/\s+/);
      
        return arr.filter(word => word !== '').length;
    }
    // let word = text.split(" ").length
    let time = 0.008*countWords(text)
    return (
        <>
            <div className="container">
                <h1 className=''>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="mybox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="mx-1 btn btn-success my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="mx-1 btn btn-success my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="mx-1 btn btn-danger my-1" onClick={clearText}>Reset</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p className="mt-3">{text.length} characters (without spaces)</p>
                <p>{countWords(text)} words (with spaces) </p> 
                <p>{time} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
