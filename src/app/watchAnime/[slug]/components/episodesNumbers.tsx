const EpisdoeNumbers=()=>{
    const examples =[1,2,3,4,5,6,7,8,9,10]
    return(
        <div className="bg-[#1C1C1C]">
            <div className="flex  gap-4 p-4">
                {examples.map((example)=>(
                    <div key={example} className="bg-yellow-500 w-[3%] text-center">
                        <div>
                           {example} 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EpisdoeNumbers;