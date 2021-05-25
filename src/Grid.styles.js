import { createUseStyles } from 'react-jss'

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(100, 1fr)',
    gridTemplateColumns: 'repeat(100, 1fr)',
    width: '70vw',
    height: '50vw',
    outline: '1px dotted black',
    position: 'relative',
    left : '25%'
  },
  cell: {
    cursor:'pointer',
    outline: '1px dotted black',  
    background: 'white'
  }
})