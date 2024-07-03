import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Design() {
  return (
    <div className="digital-marketing">
      <h1>Design Cost Rates</h1>
      <p>At Gurkha Technology, we understand the importance of a strong online presence in today's digital age. That's why we offer a range of comprehensive digital marketing packages tailored to meet your business's unique needs.</p>
      <ul>
        <li>
          <NavLink to="/logo" className="p">Logo</NavLink>
        </li>
        <li>
          <NavLink to="/promo" className="p">Promotional Package</NavLink>
        </li>
        
        
      </ul>
    </div>
  )
}
