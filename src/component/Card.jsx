import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"





function Card({data}) {
  return (
    
        <motion.div drag className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10  overflow-hidden'>
            <FaFileAlt />
            <p className='mt-5 text-sm font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full py-3 px-8 left-0 '>
             <div className='flex items-center justify-between mb-5 '>
              <h5 >{data.filesize}</h5>
              <span className='px-4 '> 
                  {data.down ? <IoMdClose />: <FaDownload size=".7em" /> }            
              </span>
                {
                  data.tag.isopen ? (
                    <div className={`tag w-full absolute bottom-0 left-0 h-3 py-4 ${data.tag.tagcolor=="blue"? "bg-green-600":"bg-blue-600"}  flex items-center justify-center`}>
                  <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                   ) : null
                }
                
             </div>
            </div>
        </motion.div>
    
  )
}

export default Card