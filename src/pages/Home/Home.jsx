import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Gurkhatech Company Profile</h1>
      <p>Gurkha Technology is a dynamic and forward-thinking company with a strong focus on digital marketing, graphics design, web design, and search engine optimization (SEO). We excel in crafting digital strategies that empower businesses to thrive in the digital landscape. </p>
      <p>With a dedicated team of experts, we offer tailored solutions that elevate brands, drive online visibility, and engage audiences effectively.</p>
      <p>Our expertise lies in creating captivating graphics, designing user-friendly websites, and implementing data-driven SEO strategies that propel businesses to new heights. As a one-stop solution provider, we are committed to helping our clients achieve their digital goals and establish a robust online presence.</p>

      <p>Please click the below link to go through our company profile</p>

      <NavLink to="https://gurkhatech.com/" className="profile">Company Profile</NavLink>
    </div>
  )
}
