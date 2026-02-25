import React from 'react'
import Footer from './Footer'


const Bookfooter = () => {
  return (
    <>
        <h3 style={{textAlign:"center", color:"white", fontSize:"1.5rem", margin:"10px"}}>February 24th</h3>
        <section>
           <button type="button" className='btn-book'>2pm</button>
            <button type="button" className='btn-book'>3pm</button>
            <button type="button" className='btn-book'>4pm</button>
            <button type="button" className='btn-book'>5pm</button>
        </section>
        <section>
           <button type="button" className='btn-book'>6pm</button>
            <button type="button" className='btn-book'>7pm</button>
            <button type="button" className='btn-book'>9pm</button>
            <button type="button" className='btn-book'>10pm</button>
        </section>
        <h3 style={{textAlign:"center", color:"white", fontSize:"1.5rem", margin:"10px"}}>February 25th</h3>
        <section>
           <button type="button" className='btn-book'>1pm</button>
            <button type="button" className='btn-book'>2pm</button>
            <button type="button" className='btn-book'>3pm</button>
            <button type="button" className='btn-book'>4pm</button>
        </section>
        <section>
           <button type="button" className='btn-book'>5pm</button>
            <button type="button" className='btn-book'>7pm</button>
            <button type="button" className='btn-book'>9pm</button>
            <button type="button" className='btn-book'>10pm</button>
        </section>
        <h3 style={{textAlign:"center", color:"white", fontSize:"1.5rem", margin:"10px"}}>February 26th</h3>
        <section>
           <button type="button" className='btn-book'>2pm</button>
            <button type="button" className='btn-book'>3pm</button>
            <button type="button" className='btn-book'>4pm</button>
            <button type="button" className='btn-book'>5pm</button>
        </section>
        <section>
           <button type="button" className='btn-book'>6pm</button>
            <button type="button" className='btn-book'>7pm</button>
            <button type="button" className='btn-book'>9pm</button>
            <button type="button" className='btn-book'>10pm</button>
        </section>

        <Footer />

    </>
  )
}

export default Bookfooter
