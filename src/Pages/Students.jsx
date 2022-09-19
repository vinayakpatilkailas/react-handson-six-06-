import  Header  from "../Component/Header";
import '../App.css';
import { useState } from "react";
import  StudentCard  from "../Component/StudentCard";
import { useStudentConsumer } from "../StudentContext";
 const Students = () =>{
    let [StudentList ,addStudent] = useStudentConsumer();
    let [SPage, setPage] =useState(true);
    let [AddBtn, setBtn] =useState('Add');
    const [Sname, setSname] =useState('');
    const [Sage, setSage] =useState('');
    const [Scourse, setScourse] =useState('');
    const [Sbatch, setSbatch] =useState('');

    const [edit,setEdit] =useState(false);

    let [Student, PassStudent] =useState(null);

    function FormSubmit(){
        
        if(!edit){
            let StudentObj ={
                name:Sname,
                age:Sage,
                course:Scourse,
                batch:Sbatch
            }
            addStudent([...StudentList,StudentObj]);
            console.log(StudentList);
            setSage('');
            setSname('');
            setSbatch('');
            setScourse('');
            setPage(true);
        }else{
          

           StudentList.map( (st) => {

               if(st.name === Student.name){
                   st.name=Sname;
                   st.age=Sage;
                   st.course =Scourse;
                   st.batch =Sbatch;
               }
           } );
           setPage(true);
           setEdit(false);
           setSage('');
           setSname('');
           setSbatch('');
           setScourse('');
           console.log(edit);
           setBtn("Add");
          
        }
    }

    function FormCancel(){
        setPage(true);
        setSage('');
        setSname('');
        setSbatch('');
        setScourse('');
    }
    
    function EditStudent(item){
       setPage(false);
       setEdit(true);
       console.log(item);
       PassStudent(item);
       setSname(item.name);
       setSage(item.age);
       setScourse(item.course);
       setSbatch(item.batch);
       setBtn("Update");
    }
  

    return(
        <div className="Students">
            <Header/>
            <div className="Overallstudent-btn">
                <h2>Students Details</h2>
                <button onClick={() => setPage(false) } >Add Student</button>
            </div>
            <div>
            {
            SPage? <section className="Details">  
            <div className="Head">
                <h3>Name</h3>
                <h3>Age</h3>
                <h3>Course</h3>
                <h3>Batch</h3>
                <h3>Change</h3>
            </div>
            <div className="Data">
            { StudentList?.map( (item, index) => (
                <StudentCard key={index}
                 name={item.name} 
                 age={item.age}
                 course={item.course}
                 batch={item.batch}
                 EditStudent={ () => EditStudent(item) }
                  />
            ) ) }
            </div>
           
      </section>:
      <section className="Contactdata">
            <form>
                      <h3>Name:</h3>
                  <input type={'text'} placeholder={'name'} onChange={(e) => setSname(e.target.value)} value={Sname}  ></input>
  
                   <h3>Age:</h3>
                   <input type={'text'} placeholder={'Age'} onChange={(e) => setSage(e.target.value)}  value={Sage}
                   ></input>
  
                   <h3>Course:</h3>
                   <input type={'text'} placeholder={'Course'} onChange={(e) => setScourse(e.target.value)} value={Scourse} ></input>
                   <h3>Batch:</h3>
                   <input type={'text'} placeholder={'Batch'} onChange={(e)=> setSbatch(e.target.value)} value={Sbatch}></input>
                   <br></br>
            </form>
            <div className="Click-btn">
            <button onClick={() => FormCancel()}>CANCEL</button>
            <button  onClick={ () =>FormSubmit() }>Add</button>
            </div>
              </section>
           }
            </div>
      
        </div>
    )
}
export default Students;