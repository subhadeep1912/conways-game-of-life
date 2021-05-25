import React from 'react'
import './Grid.css'

export default function Grid() {

    const myCanvas = document.getElementById("myCanvas")


    return (
        <div>
            <div id = "myCanvas">
                <div id = "cell1"></div>
                <div id = "cell2"></div>
            </div>
        </div>
    )
}
