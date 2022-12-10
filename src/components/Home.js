
import { Link } from 'react-router-dom'
import { Fotter } from './Fotter'
import '../css/Home.css';
import { Search } from './Search';

export const Home = () => {
  return (
    <div>
        <section className='home'>
            <div className="right">
                <Link to="/">Gamil</Link>
                <Link to="/">Images</Link>
                <i className="bi bi-grid-3x3-gap-fill"></i>
                <i className="bi bi-person-fill"></i>
            </div>
            <div className="body">
                <div className="logo">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                </div>
               <Search />
            </div>
            <Fotter/>
        </section>
    </div>
  )
}
