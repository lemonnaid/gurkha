import React from 'react'
import Sidebar from './pages/global/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import DigitalMarketing from './pages/digitalmarketing/DigitalMarketing'
import Design from './pages/graphicdesign/Design'
import WebDev from './pages/webdevlopment/WebDev'
import Seo from './pages/seo/Seo'
import FbInsta from './pages/digitalmarketing/FbInsta';
import GoogleAds from './pages/digitalmarketing/GoogleAds';
import TiktokVideo from './pages/digitalmarketing/TiktokVideo';
import Logo from './pages/graphicdesign/Logo';
import Promotional from './pages/graphicdesign/Promotional';

export default function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path = '/' element= {<Home />} />
          <Route path = '/dm' element= {<DigitalMarketing />} > 
          </Route>
          <Route path = '/design' element= { <Design /> }  />
          <Route path = '/webdev' element= { <WebDev/> }  />
          <Route path = '/seo' element= { <Seo/> }  />
          <Route path = "/fb-insta" element= { <FbInsta />}/>
          <Route path = "/googleads" element= { <GoogleAds/>}/>
          <Route path = "/tiktok-vid" element= {<TiktokVideo /> }/>
          <Route path = "/logo" element={<Logo />} />
          <Route path = "/promo" element={<Promotional/> } />
        </Routes>
      </Sidebar>
    
    </>
    
  )
}
