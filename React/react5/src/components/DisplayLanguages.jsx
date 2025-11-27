import React from 'react'

const DisplayLanguages = (props) => {
    return (
        <div id='display-grid' className='p-20 flex gap-3 flex-wrap'>
            {
                props.languagesArray.map((item) => {
                    return (
                        <div key={item.id} className='item p-2 border shadow min-w-[300px] h-[300px] rounded'>
                            <ul className='flex flex-col gap-4 p-4 bg-white rounded-2xl shadow-md'>
                                <li className='text-3xl font-extrabold text-center text-gray-700'>
                                    {item.name}
                                </li>
                                <li className='bg-gradient-to-bl from-yellow-100 to-yellow-300 text-yellow-800 px-4 py-2 rounded-xl text-center font-semibold'>
                                    Difficulty: {item.difficulty}
                                </li>
                                <li className='bg-gradient-to-br from-blue-100 to-blue-300 text-blue-800 px-4 py-2 rounded-xl text-center font-semibold'>
                                    Duration: {item.duration}
                                </li>
                                {/* Top Right → Bottom Left ->bl */}
                                {/* Top Left -> Bottom Right ->br */}
                                <span className='font-bold'>Used For :</span>
                                <li>
                                    <ol className='ms-10 list-disc'>
                                        {item.scope.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                        })}
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DisplayLanguages