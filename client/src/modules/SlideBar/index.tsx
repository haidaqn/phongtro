import * as React from 'react'

const SlideBar = () => {
  return (
    <div className='flex gap-5 flex-col'>
      <div className="bg-white rounded-md p-2 border-[1px]">
        <h1>Xem theo giá</h1>
      </div>
      <div className="bg-white rounded-md p-2 border-[1px]">
        <h1>Xem theo diện tích</h1>
      </div>
    </div>
  )
}

export default SlideBar