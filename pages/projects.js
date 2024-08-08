import React, {useState, useEffect} from 'react'
import Link from 'next/link'


const projects = () => {

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
    <div className='flex  flex-col relative h-screen w-screen bg-black cursor-none justify-center items-center'>
      <div className='absolute inset-0 left-0 top-0 ml-8 mt-4'>
        <h1 className='text-8xl font-integralbold text-white'>PROJECTS</h1>
      </div>
      <h2 className='text-white text-4xl font-integral my-8'>This page is currently under construction</h2>
            <Link href='/'>
              <div className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
              before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0 text-white
              font-integral'>
                GO BACK</div>
            </Link>
      <div className='fixed pointer-events-none w-[40px] h-[40px] rounded-full bg-white mix-blend-difference z-50' 
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
        }}/>
    </div>
  )
}

export default projects
