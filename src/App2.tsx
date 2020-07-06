import React, { FunctionComponent, useRef, useImperativeHandle, useState, forwardRef } from 'react';

interface ChildRef {
  display:  (message:string)=>void
};

const App2: FunctionComponent = () => {
  const childRef = useRef<ChildRef>(null);
  return (
    <div>
      <button onClick={()=>{
        if(!!childRef.current){
          childRef.current.display("test test test");
        }
      }}>Child Alert</button>
      <ChildDiv ref={childRef}></ChildDiv>
    </div>
  );
}
const ChildDivFunc = (props: any, ref: any)=>{
  const [state, setState] = useState("");
  useImperativeHandle(ref, () => ({    
    display: (message: string) => {
      setState(message);
    }
  }));
  return (
    <div>Child Div Display: {state}</div>
  )
}
const ChildDiv = forwardRef(ChildDivFunc);
export default App2;