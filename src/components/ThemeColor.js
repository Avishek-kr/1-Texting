import React from 'react'

function ThemeColor(props) {
    return (
        <div className="text-center">
            <h1>Theme Colors</h1>
             <button className="btn btn-primary" onClick={props.yellow} >Yellow</button>
             <button className="btn btn-primary mx-3" onClick={props.blue}>Blue</button>
             <button className="btn btn-primary" onClick={props.red}>Red</button>
        </div>
    )
}

export default ThemeColor
