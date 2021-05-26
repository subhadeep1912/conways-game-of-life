import React, { useState } from 'react'
import './Grid.css'
import useStyles from './Grid.styles';

const initialCells = Array.from({ length: 100}, () => ({
    on: false,
    color: 'white',
}))

export default function Grid() {
    const classes = useStyles()
    const [cells, setCells] = useState(initialCells);
    const updateCell = (i) => () => {
        setCells(cells.map((cell, cellIndex) => {
            if (cellIndex === i) {
                //set to current COllor
                return {
                    on: true,
                    color: 'black',
                }
            }
            return cell;
        }))
    };
    return (
        <div className = {classes.grid}>
            {cells.map((cell, i) => <div key={i} style = {{ background:cell.on ? cell.color: '#fffff' }} className={classes.cell} onClick = {updateCell(i)}></div>)}
        </div>
    )
}
