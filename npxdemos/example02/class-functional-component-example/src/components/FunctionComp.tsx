import React,{ useState } from "react";

interface IState{
  bookname:string;
  author:string;

}

interface IProps{
  stname:string;
  age:number;
}

const FunctionComp:React.FC<IProps>=({stname,age})=>{
  const [state]=useState<IState>({bookname:"Complete Ref", author:"Herbert"})
  return(
  <>
  <h1>This is Fuctional Component</h1>
      <div>
        <h2>Functional Component Props Values</h2>
      <h3>
        Student Name is:<strong>{stname}</strong><br/>
        Student Age is:<strong>{age}</strong><br/>
      </h3>
      </div>
      <div>
      <h2>Functional Component State Values</h2>
      <h3>
        Book Name is:<strong>{state.bookname}</strong><br/>
        Author is:<strong>{state.author}</strong><br/>
      </h3>
      </div>
  </>

  );
}
export default FunctionComp