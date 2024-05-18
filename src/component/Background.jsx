import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-[2]'>
        <div className='absolute  w-full py-10 flex justify-center text-zinc-600 text-xl font-bold'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl leading-none tracking-tighter font-semibold text-zinc-900'>DOCs.</h1>
    </div>
  )
}

export default Background