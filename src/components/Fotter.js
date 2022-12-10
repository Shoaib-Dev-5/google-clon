import React from 'react'
import { Link } from 'react-router-dom'

export const Fotter = () => {
  return (
    <div>
        <section className='fotter'>    
            <div className="right">
              <div>
                <Link to='/' >About</Link>
                <Link to='/' >Advertising</Link>
                <Link to='/' >Bussiness </Link>
                <Link to='/' >How search works</Link>

              </div>
            </div>
            <div className="left">
            <Link to='/' >Privacy</Link>
                <Link to='/' >Terms </Link>
                <Link to='/' >Settings</Link>
            </div>
        </section>
    </div>
  )
}
