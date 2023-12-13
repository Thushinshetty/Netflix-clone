import React from 'react'
import Header from './Header'

export default function Login() {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background'/>
        </div>
        <form className='absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white  rounded-lg bg-opacity-70'>
            <h1 className='font-bold text-3xl py-4'>Sign In </h1>
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-500 rounded-lg'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-500 rounded-lg'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
            <p>new to NetFlix ? Sign up now</p>
        </form>
    </div>
  )
}
