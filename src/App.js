//import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounter1 from './components/ClassCounter1';
import ClassCounter2 from './components/ClassCounter2';
import { ComponentA } from './components/ComponentA';
import { ComponentB } from './components/ComponentB';
import { ComponentC } from './components/ComponentC';
import { Counter1 } from './components/Counter1';
import { Counter2 } from './components/Counter2';
import { Counter3 } from './components/Counter3';
import { DataFetching } from './components/DataFetching';
import { DataFetching2 } from './components/DataFetching2';
import { HookCounter } from './components/HookCounter';
import { HookCounter11 } from './components/HookCounter11';
import { HookCounter2 } from './components/HookCounter2';
import { HookCounter3 } from './components/HookCounter3';
import { HookCountr4 } from './components/HookCountr4';
import IntervalClassCounter from './components/IntervalClassCounter';
import { IntrevalHookCounter } from './components/IntrevalHookCounter';
import React from 'react';
import { useReducer } from 'react';
export const UserContext=React.createContext()
export const UserCompanyContext=React.createContext()
export const CountContext=React.createContext()
const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case "increment":
      return(state+1)
    case "decrement":
        return(state-1)
        case "reset":
          return(initialState)
  }

}


function App() {
  const[count,dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter2/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookCountr4/> */}
      {/* <ClassCounter1/> */}
      {/* <HookCounter11/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntrevalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <ComponentA/>
      // <ComponentB/> */}
      {/* // <UserContext.Provider value='fariha'>
      //   <UserCompanyContext.Provider value='CGG'>
      //   <ComponentC/>
      //   </UserCompanyContext.Provider>
          
      // </UserContext.Provider> */}
    {/* <Counter1/> */}
    {/* <Counter2/> */}
    {/* <Counter3/> */}
    {/* Count-{count}
    <ComponentA/>
    <ComponentB/>
    <ComponentC/> */}
 {/* </CountContext.Provider> */}
 <DataFetching2/>
    </div>
   
  );
}

export default App;
