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
      const effect= new Effect(canvasRef.current.height,canvasRef.current.width,ctx)
      effect.init()
      


      function animate(){
      ctx.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
      effect.draw()
      effect.update()
        requestAnimationFrame(animate)
      }
      animate()
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
      this.vx=1
      this.vy=1
     }

     draw(){
    this.ctx.fillRect(this.x,this.y,this.size,this.size)
     }

     update(){
      this.x+= this.vx
      this.y+= this.vy
     }
  }
  class Effect{
     constructor(height,width,ctx){
      this.height=height
      this.width=width
      this.particleArray=[]
      this.ctx=ctx
     }
     init(){
      for(let i=0; i<=10;i++){
        this.particleArray.push(new Particle(0,0,50,this.ctx,this))
      }
     }

     draw(){
       this.particleArray.forEach((particle)=> particle.draw())
     }

     update(){
      this.particleArray.forEach((particle)=> particle.update())
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
// we need to move the particles 
