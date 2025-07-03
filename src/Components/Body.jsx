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
        <div>
            <h1 className='text-5xl font-bold font-playfair'> Host your website in 5 minutes </h1>
            <p>With Hoster,get your website up and running in under 5 minutes with the most competitive pricing packages available online </p>
            <form action="">
                <input type='email' placeholder='Enter Your email'></input>
                <button>Join Waitlist</button>

            </form>
            <div>
                <img src='./assets/Checkmark.svg' alt='check'/>
                <p>No spam ever.Unsubscribe anytime</p>
            </div>
        </div>


    </div>
  )
}

export default Body