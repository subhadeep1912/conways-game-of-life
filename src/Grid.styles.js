import { createUseStyles } from 'react-jss'

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateColumns: 'repeat(10, 1fr)',
    width: '70vw',
    height: '50vw',
    outline: '1px dotted black',
    position: 'relative',
    left : '1.5625%'
  },
  cell: {
    cursor:'pointer',
    outline: '1px dotted black',  
    background: 'white'
  }
})