import React from 'react'
import mine from "./mine.jpg"
import classes from './myself.module.css'

function Myself() {
    return (
        <div className={`${classes.container} text-center`}>
                <img src={mine} alt="mine" />
                <p className="m-3">Hello Friends,</p>

I am Avishek the founder of    <a href="https://www.latestkhabari.com">LatestKhabari</a> .
I am an Software Engineer by profession.
I have been doing coding and UI/UX design since 2019.
I am passionate about sharing my all learnings and experiences of Coding, designing and Latest tech news.
<p>LatestKhabari will be a Helping hand for my Visitors.</p>
I have no YouTube Channel right now But if all goes well then I will also share my Tech News, Gaming updates, and much more on it.
In the Technology world, I am here to hang you around me until you are willing to tie with me.
<p className="m-3">For those who are curious about my birthplace then I am coming from Haryana, Faridabad (India).</p>
            </div>
    )
}

export default Myself
