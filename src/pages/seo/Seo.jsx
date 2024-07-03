import React from 'react'

export default function Seo() {
  return (
    <div>
      <h1> Search Engine Optimization</h1>
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
        description: "Optimize your page with monthly SEO report for 3 months",
        desc: " Price: Rs 10,000 per month",
    },
    {
        title: "Advanced",
        description: "Optimize your page with monthly SEO report for 6 months",
        desc: " Price: Rs 20,000 per month",
    },
    {
        title: "Custom",
        description: "Optimize your page with monthly SEO report. Tailored to meet your requirements",
        desc: " Price: Customized based on need",
    },
]