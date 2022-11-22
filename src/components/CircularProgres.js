import './CircularProgres.css';
import { useEffect, useState } from 'react';

function CircularProgres({porcentaje,size,color}) {
  const [progreso,setProgreso] = useState(0);
  const sc=size/2;
  const radio=sc-(size*.10);
  const strokeDasharray=2*Math.PI*radio;
  const sd=strokeDasharray * ((100 - progreso)/100);
  //const [load,setLoad] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      if(progreso<porcentaje){
        setProgreso(progreso+1)
      }
    },1000/100);
    /*return () => {
      clearTimeout(1000)
    }*/
  },[progreso]);
  return (
    <div className='circular-progress' style={{height:size,width:size}}>
    <svg className='svg-container' width={size} height={size}>
      <circle className='svg-track'
        cx={sc}
        cy={sc}
        fill="transparent"
        r={radio}
        stroke="#F0F0F0"
        strokeWidth={size*0.03}
      >
      </circle>
      <circle className='svg-track-indicador'
        cx={sc}
        cy={sc}
        fill="transparent"
        r={radio} //(with-strokewidth)
        stroke={color}
        strokeWidth={size*.06} //(strokewidth)
        strokeDasharray={strokeDasharray} //2PIr -> perimetro
        strokeDashoffset={sd}//dasharray * ((100-progress)/100)
        strokeLinecap="round"
      >
      </circle>
    </svg>
    <p className='porcentaje' style={{fontSize:size*0.19}} >{porcentaje}%</p>
    </div>
  );
}

export default CircularProgres;