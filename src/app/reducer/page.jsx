import React from 'react'

const buttonStyle = 'px-4 py-2 bg-blue-500 text-white rounded'

const ReducerPage = () => {
  return (
    <div className="flex justify-center gap-4 py-5 text-4xl">
      <button>-</button>
      <strong className="text-blue-600">0</strong>
      <button>+</button>
    </div>
  )
}

export default ReducerPage
