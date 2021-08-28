import React, {useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState("")

    const UpperCase=()=>{
        let newText= text.toUpperCase()
        setText(newText)
    }
    const LowerCase=()=>{
        let newText= text.toLowerCase()
        setText(newText)
    }
    const clearAll=()=>{
        setText(" ")
    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={()=>UpperCase()} className="btn btn-primary">Convert to Uppercase</button>
            <button onClick={()=>LowerCase()} className="btn btn-primary mx-3">Convert to Lowercase</button>
            <button onClick={()=>clearAll()} className="btn btn-primary">Clear All</button>
        </div>
        <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.192* text.split(" ").length/60} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm
