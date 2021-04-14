
import './App.css';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"70px"
    }}
    >
    <h1>Todo App ✍️</h1>
      <TextField id="standard-basic" label="Add your task here.." style={{maxWidth:"600px",width:"90vw"}} />
    </div>
      
    </div>
  );
}

export default App;
