'use client'
import { useState } from 'react'
import axios from 'axios'
import { getImagesSlider } from '../api'
import {  useQuery } from '@tanstack/react-query'

const Practice = () => {
    //const [data, setData] = useState<{first: string, second: string[]} | null>(null)
    const [loading, setLoading] = useState(false)
    
    const {data,refetch,isLoading}=useQuery({ queryKey: ['images'], queryFn: getImagesSlider })
    
 
    
    return (
        <div className="flex flex-col gap-4 text-white col-start-2 p-4">
            <div className="flex gap-x-4">
                <button 
                    onClick={()=>handleRefetch()}
                    className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                >
                    {loading ? 'Loading...' : 'first'}
                </button>
                <input className="text-black px-2"></input>
                <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">delete me</button>
                <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">add me</button>
            </div>

            <div className="flex gap-x-4">
                <button 
                    className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                >
                    {loading ? 'Loading...' : 'second'}
                </button>
            </div>
            
            {/* Display data when available */}
            {data && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default Practice;