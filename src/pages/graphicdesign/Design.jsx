import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Design() {
  return (
    <div className="digital-marketing">
      <h1>Design Cost Rates</h1>
      <p>Although custom designs aren’t a one-off thing and some designs may require multiple iterations, the rate sheet below is an estimate of how much things would tentatively cost. Please note that the above rate are design charges and additional printing charges apply at your end.</p>
      <ul>
        <li>
          <NavLink to="/design/logo" className="p">Logo</NavLink>
        </li>
        <li>
          <NavLink to="/design/promo" className="p">Promotional Package</NavLink>
        </li>
        
        
      </ul>
    </div>
  )
}
