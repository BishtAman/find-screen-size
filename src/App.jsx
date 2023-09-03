import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setHeight(window.innerHeight)
    })
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
  }, [window.innerHeight, window.innerWidth])

  return (
    <main className="bg-slate-800  text-white min-[1024px]:h-[100vh] flex flex-col items-center">
     <h1 className="text-6xl m-[100px]">What's your dimension?</h1>
     <h3 className="text-4xl m-[10px]">Your device's dimension is</h3>
     <h2 className="text-5xl m-[10px]">{width} X {height}</h2>
    </main>
  );
}

export default App;
