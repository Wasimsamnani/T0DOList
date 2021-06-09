import './App.css';
import {useState} from 'react';
import Todolist from './Todolist';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
function App() {
  const [inputlist,setinputlist] = useState("");
  const [list,setlist] = useState([]);
  const onchange = (e) =>{
    e.preventDefault();
    const {value} = e.target;
    setinputlist(value);
  }
  const Add = ()=>{
    setlist((old)=>{
      return [...old,inputlist]
    });
    setinputlist("");
  }
  const deletelist =(id) => {
    console.log(id);
    setlist((old) => {
      return old.filter((list,ind) => {
        return ind!==id;
      })
    })
  }
  return (
    <>
    <div className="Top_div">
    <div>
    <h1> To Do List</h1>
    </div>
    <div className="input_field">
    <input type="text" name="text" value={inputlist} placeholder="ADD ITEMS" onChange={onchange}/>
    <AddCircleOutlineIcon onClick={Add}  style={{ fontSize: 25,color:"green",marginBottom:"-7px"}} />
    </div>
     </div>

     <div className="List">

     {list.map((list,ind) => { return <Todolist key={ind} value={list} id={ind} onselect={deletelist} /> ;
     })}
     </div>
    </>

  )
}

export default App;
