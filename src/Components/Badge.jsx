import React from 'react'

function Badge() {

  return (
    <div style={{backgroundColor:"rgba(8, 223, 209, 0.318)",padding:"1em",display:"flex",justifyContent:"space-between"}}>
        <h2 style={{textAlign:"center"}}>BADGES</h2>
        <h3> Primary&nbsp;&nbsp; <span className="e-badge e-badge-primary e-badge-circle" style={{textAlign:"center"}}>1</span></h3>
         <h3>Dark &nbsp;&nbsp; <span className="e-badge e-badge-dark e-badge-pill">23</span></h3>
         <h3> Secondary &nbsp; &nbsp;<span className="e-badge e-badge-secondary e-badge-Link">45</span></h3>
         <h3>success &nbsp;&nbsp; <span className="e-badge e-badge-success  ">67</span></h3>
         <h3> danger &nbsp;&nbsp;<span className="e-badge e-badge-danger">78</span></h3>
         <h3> warning &nbsp;&nbsp;<span className="e-badge e-badge-warning">56</span></h3>
         <h3> light &nbsp;&nbsp;<span className="e-badge e-badge-light">34</span></h3>
         <h3>info &nbsp;&nbsp;<span className="e-badge e-badge-info">90</span></h3>
         
    </div>
  )
}

export default Badge