'use client'
import { useState } from 'react'
import axios from 'axios'
import { getImagesSlider } from '../api'
import { useQuery } from '@tanstack/react-query'

interface ImageData {
    images: string[];
    count: number;
}

const Practice = () => {
    const { data, isLoading, refetch, isFetching } = useQuery<ImageData>({ 
        queryKey: ['images'], 
        queryFn:()=> getImagesSlider(),
        refetchOnMount: true,
        staleTime: Infinity, // Data will never be considered stale
        gcTime: 0 // Remove from cache immediately when unused
    })
    
    if(isLoading){
        return <div className='bg-red-500 p-4 rounded text-white'>Loading...</div>
    }
    
    return (
        <div className="flex flex-col gap-4 text-white col-start-2 p-4">
            <div className="flex gap-x-4">
                <button 
                    onClick={() => void refetch()}
                    className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                >
                    {isFetching ? 'Loading...' : 'Refresh Data'}
                </button>
                <input className="text-black px-2"></input>
                <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">delete me</button>
                <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">add me</button>
            </div>

            <div className="flex gap-x-4">
                <button 
                    className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                >
                    {isFetching ? 'Loading...' : 'second'}
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