import React from 'react'
import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Unity?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these unity 3D projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/Skeletus" target='_blank' rel='noopener noreferrer'>
                    Unity 3D Mobile and Turn-based Game
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg" />
        </div>
    </div>
  )
}
