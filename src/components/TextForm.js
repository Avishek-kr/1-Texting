import React, {useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState("Enter the text")

    const UpperCase=()=>{
        let newText= text.toUpperCase()
        setText(newText)
    }
    const LowerCase=()=>{
        let newText= text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={()=>UpperCase()} className="btn btn-primary">Convert to Uppercase</button>
            <button onClick={()=>LowerCase()} className="btn btn-primary mx-3">Convert to Lowercase</button>
        </div>
    )
}

export default TextForm
