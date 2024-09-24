import { Component, ReactNode } from "react";

interface IState{
  bookname:string;
  author:string;

}

interface IProps{
  empname:string;
  age:number;
}

export default class ClassComp extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state={
      bookname:"React JS",
      author:"Oreilly"
    }
  }
  render(){
    const {empname,age}=this.props;
    const{bookname,author}=this.state;
    return(
      <>
      <h1>This is Class Component</h1>
      <div>
        <h2>Class Component Props Values</h2>
      <h3>
        Employee Name is:<strong>{empname}</strong><br/>
        Employee Age is:<strong>{age}</strong><br/>
      </h3>
      </div>
      <div>
      <h2>Class Component State Values</h2>
      <h3>
        Book Name is:<strong>{bookname}</strong><br/>
        Author is:<strong>{author}</strong><br/>
      </h3>
      </div>
      </>
    );
      
  }
}