'use client'
import { useState } from 'react'
import axios from 'axios'
import { deletePerson, getImagesSlider, GetPersons, updateData } from '../api'
import { useMutation, useQuery } from '@tanstack/react-query'

interface ImageData {
    images: string[];
    count: number;
}
interface ImageData2 {
    data: {id:string,name:string}[];
}



const Practice = () => {
    

 
    const { data, isLoading, refetch, isFetching } = useQuery<ImageData>({ 
        queryKey: ['images'], 
        queryFn:()=> getImagesSlider(),
        refetchOnMount: true,
        staleTime: 5000, // Data will never be considered stale
        gcTime: 6000 // Remove from cache immediately when unused
    })

        const { data:data2, isLoading:isloading2, refetch:refetch2, isFetching:isFetching2 } = useQuery<ImageData2>({ 
        queryKey: ['Person'], 
        queryFn:()=> GetPersons(),
        refetchOnMount: true,
        staleTime: 5000, // Data will never be considered stale
        gcTime: 6000 // Remove from cache immediately when unused
    })


    const deleteMutation=useMutation({
        mutationFn:(postId:number)=>deletePerson(postId)
    })

    const updateMutation=useMutation({
        mutationFn:()=>updateData()
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
            {/* {data && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
            {data2 && data2?.data?.map((data) => (
                <div key={data.id} className="mt-4 p-4 bg-gray-800 rounded">
                    <pre>{data.name}</pre>
                    <button onClick={()=>deleteMutation.mutate(Number(data?.id))}>delete it</button>
                </div>
            ))} */}
            <button onClick={()=>updateMutation.mutate()}>add another data</button>
        </div>
    )
}

export default Practice;