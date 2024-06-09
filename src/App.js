import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import ScrollToTop from './components/ScrollToTop';


function App() {

  const inputEl = useRef(null);

  return (
    <div className="App">
      <input type='text' ref={inputEl} />
      <button onClick={()=>inputEl.current.focus()}>검색</button>
      <ScrollToTop />
    </div>
  );
}


// function App(){

//   const [stateCount, setStateCount] = useState(0);
//   const clickCount =()=> setStateCount((prev)=>prev + 1);
//   const refCount = useRef(0);
//   let count = 0;

//   return(
//     <div>
//       <div>state:{stateCount}</div>
//       <div>변수:{count}</div>
//       <div>ref:{refCount.current}</div>

//       <button onClick={clickCount}>
//         state up
//       </button>
//       <br/>
//       <button onClick={()=>{
//         count++;
//       }}>
//         변수 up
//       </button>
//       <button onClick={()=>{
//         refCount.current++;
//         console.log('ref',refCount);
//       }}>
//         ref up
//       </button>
//     </div>
//   )
// }

export default App;
