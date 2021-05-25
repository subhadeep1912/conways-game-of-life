import React, { useState } from 'react'
import './Grid.css'
import useStyles from './Grid.styles';

export default function Grid() {
    const classes = useStyles()
    const [cells] = useState( Array.from({ length: 10000}));
    return (
        <div className = {classes.grid}>
            {cells.map(() => <div className={classes.cell}></div>)}
        </div>
    )
}
