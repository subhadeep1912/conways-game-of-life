import './App.css';
import ButtonGroup  from './ButtonGroup'
import Grid from './Grid'
import useStyles from './App.styles'


function App() {
  const classes = useStyles();

  return (
    <div className = {classes.app}>
      <ButtonGroup />
      <Grid />
    </div>
  );
}

export default App;
