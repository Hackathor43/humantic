
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import data from "./data/data";
import Template from './Template';
function App() {
  const [modData,setData]=useState(data);
  const [inputVal,setInputVal]=useState('');
  const [error,setError]=useState(false);
 const handleCallBack=(e)=>{
   console.log(e);
    setData(e);
  }
  useEffect(()=>{
    setError(false);
  },[inputVal])
  function checkForFolder(){
    let flag=false;
    if(modData.hasOwnProperty("items")){
      for(let i=0;i<modData.items.length;i++){
        if(modData.items[i].name===inputVal){
          flag=true;
          break;
        }
      }
      if(!flag){
        modData.items.push({"name":inputVal,"isFolder" : true,"items":[]});
        setData(modData);
        setInputVal('');
        setError(false);
      }
      else{
        //throw error
        setError(true);
      }
    }
    console.log(modData);
  }
  function checkForFile(){
    let flag=false;
    if(modData.hasOwnProperty("items")){
      for(let i=0;i<modData.items.length;i++){
        if(modData.items[i].name===inputVal){
          flag=true;
          break;
        }
      }
      if(!flag){
        modData.items.push({"name":inputVal,"isFolder" : false,"items":[]});
        setData(modData);
        setInputVal('');
        setError(false);
      }
      else{
        setError(true);
      }
    }
    console.log(modData);
  }
  return (
    <div className="App">
     <div>
        <div style={{ paddingLeft: 10 }}>
          <Template data={data} onChange={handleCallBack} name={data.name}></Template>
        </div>
        <br></br>
        <div style={{ paddingLeft: 10 }}>
          <input value={inputVal} onChange={(event)=>setInputVal(event.target.value)}></input>
          <span className='error-message' style={{display: error ? "block":"none",color:"red"}}>File or Folder with same name already exist</span>
        </div>
        <br></br>
        <div style={{ display: "flex" }}>
          <div style={{ padding: 10 }}>
            <button onClick={checkForFile}>Add File</button>
          </div>
          <div style={{ padding: 10 }}>
            <button onClick={checkForFolder}>Add Folder</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
