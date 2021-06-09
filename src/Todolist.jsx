import DeleteIcon from '@material-ui/icons/Delete';
const Todolist = (props)=>{

  return(
    <>
    <div key={props.key}>
    <textarea rows="1" value={props.value} id={props.id}/>
    <DeleteIcon style={{marginBottom:"-3px"}} onClick={() => {
      props.onselect(props.id);
      }}/>
    </div>
    </>
  )
};
export default Todolist;
