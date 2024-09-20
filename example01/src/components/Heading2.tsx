import { ReactElement } from "react";

type HeadingProps ={title:string}

const Heading2 = ({title}: HeadingProps): ReactElement =>{
  return <h3>{title}</h3>
}


export default Heading2;