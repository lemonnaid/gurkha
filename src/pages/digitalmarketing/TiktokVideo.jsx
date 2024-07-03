import React from 'react'

export default function TiktokVideo() {
  return (
    <div>
      <h1> Tiktok Video Packages</h1>
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
        title: "Basic",
        description: "Creation of 4 engaging Tiktok videos",
        desc: " Price: Rs 15,000",

    },
    {
        title: "Standard",
        description: "Creation of 8 creative Tiktok videos",
        desc: " Price: Rs 25,000",
    },
    {
        title: "Premium",
        description: "Creation of 16 high-quality Tiktok videos",
        desc: " Price: Rs 40,000",
    },
]