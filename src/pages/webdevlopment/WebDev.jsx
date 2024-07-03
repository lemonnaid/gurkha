import React from 'react'
import './WebDev.scss'

export default function WebDev() {
  return (
    <div>
      <h1> Web Dev</h1>
      <div className="card-container">
      
{pack.map((item) => ( 
    <div className="pack-card-body" style = {{backgroundColor : '#95D2B3'}} key={item.title}> 
      <h3 className='pack-title'>{item.title}</h3>
      <p className="pack-content">{item.description}</p>
      <p className='pack-desc'>{item.desc}</p>
      <button className="card-btn" id="learnmore-btn">
        Learn more
      </button>
    </div>
  ))}
      </div>
    </div>
  )
}

const pack = [
    {
        title: "Starter",
        description: "Get your Dynamic Page Website at only NRs. 35,000 with Search Engine Optimized and supports upto 5 pages.",
        desc: " Delivery 7-10 days",
        color: '#80bfae',
    },
    {
        title: "Standard",
        description: "Get your Dynamic Page Website at only NRs. 60,000 with Search Engine Optimized and supports upto 10 pages.",
        desc: " Delivery 10-25 days",
    },
    {
        title: "Premium",
        description: "Get your Dynamic Page Website at only NRs. 85,000 with Search Engine Optimized and supports upto 25 pages.",
        desc: " Delivery 20-45 days",
    },
]