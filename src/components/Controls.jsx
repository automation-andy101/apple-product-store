import React from 'react'

const Controls = ({ toggleZoom, frameZoom }) => {
  return (
    <div className='absolute top-3 right-3 space-x-2'>
        <button className='text-2xl text-pink-400 cursor-pointer' onClick={toggleZoom}>
            <i className={frameZoom ? 'bxr  bx-search-minus' : 'bxr bx-search-plus'}></i> 
        </button>
        <button className='text-2xl text-pink-400 cursor-pointer'>
            <i className="bx bx-x-circle"></i>
        </button>
    </div>
  )
}

export default Controls