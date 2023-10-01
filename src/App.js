import { useReducer } from 'react';
import './App.css'
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {

  const canvasRef=useRef()
  const renderRefernce=useRef(false)

  useEffect(()=>{

    if(renderRefernce.current){
      const ctx=canvasRef.current.getContext('2d')
      const effect= new Effect(canvasRef.current.height,canvasRef.current.width)
      const p1= new Particle(0,0,50,ctx,effect)
      p1.draw() 
    }
    
    renderRefernce.current=true
  },[canvasRef.current])

  class Particle{
     constructor(x,y,size,ctx,effect){
      this.effect=effect
      this.x=Math.random() * effect.width
      this.y= Math.random() * effect.height
      this.size=size
      this.ctx=ctx
     }

     draw(){
      debugger;
    this.ctx.fillRect(this.x,this.y,this.size,this.size)
     }
  }
  class Effect{
     constructor(height,width){
      this.height=height
      this.width=width
      
     }
  }
  


  return (
    <div className="App">
      
      
      <canvas ref={canvasRef} height={1000} width={1850} style={{backgroundColor:"blue"}}>
      
      </canvas>
      
    </div>
  );
}

export default App;

// first we need to define 2 classes for 
// 1 .Partcle and 2 for drawing All Paeticles