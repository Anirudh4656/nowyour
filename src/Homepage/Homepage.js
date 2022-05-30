import React from 'react'
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpeg"
import admin from "../images/admin.jpeg"
import "./Homepage.css"
const Homepage = () => {
  return (
    <>
    <div className="section-1">
        <div>
    <img className="section-1-img"src={image1}  />
        </div>
        <div className="section-1-certification">
            <h1 className='section-1-certification-h1'>Salesforces Certification?</h1>
            <p>Now prepare for your Salesforces certification
            with our latest practice exam dumps with all verified answers.Get 100% guaranteed pass at first attempt. </p>
            <div className="certification-img"> 
            <img className="section-4-img" src={image4}  /></div>
            </div>
                <div className="section-1-whatwedo">
                <div className="whatwedo-div">
                    <h3 className="section-1-whatwedo-h3">What we do?</h3>
                    {/* <h3 className="section-1-whatwedo-h4">SERVICE</h3> */}
                    </div>
                    <p className="section-1-whatwedo">
                        We  collect and organize salesforce latest exam
questions and make it into single file with all verified
answers and we also allows user to take mock exam
through link powered by Microsoft Forms on each
successful purchase from this site. We here offers
you 100% pass guaranteed by first attempt.
 </p>

                </div>
           
       
    </div>
    <div className="section-2">
<div className="buysell">
ow buying and selling of Salesforce Certification Voucher is made 100%
secure with help of our guardian
<button>Buy or Sell Vouchers</button>
</div>
<div className="section-2-img">
<div className="sec-2-div">
  <h3>Know more about</h3>
  <h3>Salesforce</h3>
  <a href="">click here</a>
  <img className="section-2-img"src={image2}  alt="w" />
  </div>
  <div className="sec-2-div2">
  <h3>Looking for Salesforce Jobs?</h3>
  <a href="">click here</a>
  <img className="section-3-img" src={image3}  alt="a" /></div>
</div>
    </div>
    <div className="section-3">
        <div className="section-3-admin">
        <h2>ADMIN</h2>
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
         
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
         
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
         
        </div>
     
        <div className="section-3-admin">
        <h2>DEVELOPER</h2>
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
         
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
         
            <div className="admin-box">
                <img className="admin-box" src={admin} alt="" />
            </div>
         
        </div>
     
    </div>
   </>
  )
}

export default Homepage