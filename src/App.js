import React,{useState} from 'react';
import BoxenContext from './contexts/BoxenContext';
import BoxWrapper from './components/BoxWrapper';
import FormWrapper from './components/FormWrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [boxen,setBoxen] = useState([]);
  const [color,setColor] = useState("");

  return (
    <BoxenContext.Provider value={{color,setColor,boxen,setBoxen}}>
      <FormWrapper />
      <BoxWrapper />
    </BoxenContext.Provider>  
  );
}

export default App;
