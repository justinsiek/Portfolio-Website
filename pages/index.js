import React, { useState, useEffect } from 'react'

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []);


  return (
    <div className='relative h-screen w-screen cursor-none bg-white'>
      <img src="/stars.png" alt="stars" className="absolute inset-0 h-full w-full object-cover -translate-y-5"/>
      <div className='absolute inset-0 flex items-center justify-center h-4/5 -translate-y-5'>
        <h1 className='text-9xl font-integralbold'>JUSTIN SIEK</h1>
      </div>
      <div className='absolute flex flex-grow bg-black h-1/5 inset-x-0 bottom-0 text-white justify-between items-center px-4 text-xl z-0'>
        <div className='flex-grow text-center font-integral'>
          <div className='inline-block'>
          <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
            before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
              ABOUT</h1>
          </div>
        </div>
        <div className='flex-grow text-center font-integral'>
          <div className='inline-block'>
          <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
            before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
              PROJECTS</h1>
          </div>
        </div>
        <div className='flex-grow text-center font-integral'>
          <div className='inline-block'>
          <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
            before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
              CONTACT</h1>
          </div>
        </div>
      </div>
      <div className='fixed pointer-events-none w-[40px] h-[40px] rounded-full bg-white mix-blend-difference z-50' 
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
        }}/>
    </div>
  )
}

export default Index