import React from 'react'
import Card from './Card'

function Foreground() {
  const data=[
    {
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      down:true,
      tag:{ isopen:false,tagTitle:"Download Now",tagcolor:"green"}  
    },
    {
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      down:false,
      tag:{ isopen:true,tagTitle:"Download Now",tagcolor:"blue"}  
    },
    {
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      down:true,
      tag:{ isopen:true,tagTitle:"Upload",tagcolor:"green"}  
    },
    {
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize:".7mb",
      down:false,
      tag:{ isopen:true,tagTitle:"Upload",tagcolor:"blue"}  
    },
  ]
  return (
     <div className='fixed p-5 z-[3] w-full h-full flex flex-wrap gap-10'>
      {data.map((item,index)=>(
                <Card data={item}/>
                

      ))}
     </div>
  )
}

export default Foreground