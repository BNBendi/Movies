import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Bookfooter = () => {
    const navigate = useNavigate()
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrow2 = new Date();
    tomorrow2.setDate(tomorrow2.getDate() + 2);
    return (
        
        <>
            <h3 style={{ textAlign: "center", color: "white", fontSize: "1.5rem", margin: "10px" }}>{today.toDateString()}</h3>
            <section>
                <button type="button" className='btn-book' onClick={() => navigate("/booker/238")}>2pm</button>
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
            <h3 style={{ textAlign: "center", color: "white", fontSize: "1.5rem", margin: "10px" }}>{tomorrow.toDateString()}</h3>
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
            <h3 style={{ textAlign: "center", color: "white", fontSize: "1.5rem", margin: "10px" }}>{tomorrow2.toDateString()}</h3>
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
