import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function App() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleClick = (e, id) => {
    setTime(+ new Date())
    console.log(+ new Date())
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>React Registartion Form</h1>
      <h2>{ time } -- { name } </h2>
      <Paper elevation={3} style={{width: 500}}>
      <TextField name="name" label="Enter your name" variant="outlined" style={{padding: 5, width: '98%'}} 
      
      onChange={ handleChange.bind(this)}
      />
<br />
      <Button variant="contained" color="primary" style={{padding: 5, margin: 5}} onClick={e => handleClick(e, 'id')}>
  Submit
</Button>
      </Paper>

        

    </div>
  );
}

export default App;
