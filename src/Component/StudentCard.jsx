import '../App.css';

 const StudentCard  = (props) => {
     const {name,age, course, batch, EditStudent } = props;
    return(
        <div className="StudentData">
           <h2 style={{fontSize:'20px'}}> {name}</h2>
           <h2 style={{fontSize:'20px'}}> {age}</h2>
           <h2 style={{fontSize:'20px'}}>{course}</h2>
           <h2 style={{fontSize:'20px'}}>{batch}</h2>
           <button onClick={ EditStudent} >Edit</button>
        </div>  
    )
}
export default StudentCard;