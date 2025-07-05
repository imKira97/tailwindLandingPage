import React from 'react'

const Body = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <img src='./assets/Blue-Shape.svg' alt='1st' className=' -rotate-45 h-64'/>
            <img src='./assets/Pink-Shape.svg' alt='2nd' className=' absolute -rotate-30 h-64'/>
            <img src='./assets/Purple-Shape.svg' alt='3rd' className='absolute -rotate-15 h-64'/>
            <img src='./assets/Hero-Model.png' alt='hero' className='absolute  h-64'/>
        </div>
        <div >
            <h1 className='text-5xl font-bold font-mono  leading-tight'> Host your website in 5 minutes </h1>
            <p className='font-serif text-gray-400 my-2' >With Hoster,get your website up and running in under 5 minutes with the most competitive pricing packages available online </p>
            <form action="" className='flex flex-col gap-4'>
                <input type='email' placeholder='Enter Your email' className='rounded-md px-4 py-3  bg-white placeholder:text-amber-800'></input>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-800 text-white'>Join Waitlist</button>

            </form>
            <div className='flex gap-2'>
                <img src='./assets/Checkmark.svg' alt='check'/>
                <p className='font-mono text-gray-500'>No spam ever.Unsubscribe anytime</p>
            </div>
        </div>


    </div>
  )
}

export default Body