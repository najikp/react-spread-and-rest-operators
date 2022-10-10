import Employee from "./Employee";
function App() {

  const emp=[
    {name:'abdulla',age:22},
    {name:'aslam',age:23},
    {name:'badsha',age:21}
  ];  
  return (
    <div className="App">{
      emp.map((obj,index)=>{
        return(
          <Employee key={index} {...obj}/>
        )
      })
    }
    </div>
  );
}

export default App;
