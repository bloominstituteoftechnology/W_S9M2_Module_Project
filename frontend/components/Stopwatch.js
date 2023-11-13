import React from 'react'

export default function Interval() {
  return (
    <div className="widget">
      <p className="info">Click Split to update total running time</p>
      <p>Total running time is <span>14 seconds</span></p>
      <p>
        <button>Split</button>
        <button>Lap</button>
      </p>
      <ul>
        <li>Lap {1}: <span>{7} sec</span></li>
        <li>Lap {2}: <span>{13} sec</span></li>
      </ul>
    </div>
  )
}
