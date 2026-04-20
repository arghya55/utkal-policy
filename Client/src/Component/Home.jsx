import React from 'react'
// import utkalTree from '../assets/utkal-tree.png'
const Home = () => {
  return (
    <>
    <div className="home-container">
       <h2 className="home-header">
  Welcome <br />
  <span className="to-text">to</span> <br />
  <span className="home-header1">UTKAL TREE</span>
</h2>
    </div>
 <div className="button-container">
  <div className="button-column">
    <a href="http://10.0.0.24:300/LoginNova.aspx" target="_blank" rel="noopener noreferrer" className="hmis-btn">UTKAL HMIS</a>
    <a href="http://10.0.0.25" target="_blank" rel="noopener noreferrer" className="qms-btn">UTKAL QMS</a>
    <a href="https://utkalhospital.com/" target="_blank" rel="noopener noreferrer" className="website-btn">UTKAL WEBSITE</a>
    <a href="https://10.0.0.12/" target="_blank" rel="noopener noreferrer" className="pacs-btn">UTKAL PACS</a>
    <button type="button" className="policy-center" onClick={() => window.location.hash = '/policy'}>SOP/POLICY/MANUALS</button>
  </div>
  {/* <div className="side-button-wrapper">
     
  </div> */}
</div>
    </>
  )
}

export default Home