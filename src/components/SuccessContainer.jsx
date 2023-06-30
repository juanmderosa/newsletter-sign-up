import React from 'react'

export const SuccessContainer = ({setFormOk}) => {
  return (
    <section className='success-section'>
        <span className='span-img'><img src="images/icon-success.svg" alt="" /></span>
        <h1 className='title-h1 title-h1-success'>Thanks for subscribing!</h1>
        <p className='success-p'>A confirmation email has been sent to <span>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button className='btn success-btn' onClick={()=>setFormOk(false)}>Dismiss message</button>
    </section>
  )
}
