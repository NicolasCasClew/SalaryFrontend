import React from 'react';
import logo from './logo.svg';
import { Select , Slider} from 'antd';
import './App.css';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

function App() {
  return (
    <div className="App">
      <div className='selector'>
        <h4 className='txt' >Text 1 Text</h4>
      <Select
      defaultValue="1"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
      ]}
    />
      </div>
      <div className='selector'>
        <h4 className='txt'>Text 2 text</h4>
      <Select 
      defaultValue="1"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
      ]}
    />
      </div>
      <div className='selector'>
        <h4 className='txt'>Text 3 text</h4>
<Slider
max={4}
min={0}
defaultValue={3}

/>
      </div>
      
    </div>
  );
}

export default App;
