import React from 'react'
import './ButtonGroup.css'

export default function ButtonGroup() {
    return (
        <div id = "buttons">
            <div id = "start-stop">
                <button name="start">Start</button>
                <button name = "stop">Stop</button>
            </div>
            <div id = "next-prev">
                <button name = "next-generation">Next Generation</button>
                <button name = "prev-generation">Previous Generation</button>
            </div>
            <div id = "inc-dec">
                <button name = "inc-grid">Increase Grid lines</button>
                <button name = "dec-grid">Decrease Grid Lines</button>
            </div>
        </div>
    )
}
