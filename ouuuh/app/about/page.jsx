'use client'
import react , {useState , useEffect} from 'react'
import Navbar from '../components/navbar'

export default function Home() {
    return (
        <div>
        <Navbar/>
        <main className="flex flex-col items-center justify-between min-w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex h-screen items-center justify-center">
            <div className='flex min-h-screen flex-col items-center justify-between p-24'>
                <h1 className='text-5xl text-white'>allah ilahina fi sramna</h1>
            </div>
            </div>
        </main>
        </div>
    )
    }