import React from 'react'
import img from '../assets/img-1.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src={img} alt="" />
        
        <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Saqlain Javed</h1>
                <h2 className='flex sm:text-3xl text-2xl text-gray-800 py-4'>
                I'm a
                <TypeAnimation
                    sequence={[
                        'Developer', // Types 'One'
                        1000, // Waits 1s
                        'Coder', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Tech Enthusiast', // Types 'Three' without deleting 'Two'
                        () => {
                        console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebook className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedin className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main