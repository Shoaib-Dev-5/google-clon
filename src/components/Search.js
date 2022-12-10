import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Global } from '../App';
import '../css/Home.css';
import { SearchPage } from './SearchPage';

export const Search = ({search_btn}) => {
  const {input,setInput}=useContext(Global);
  const navigate=useNavigate();
  const handleclick=(e)=>{
    e.preventDefault();
    navigate('/search');
  }

  return (
    <div>
         <div className="search-body">
                    <div className="search-field">
                    <i className="bi bi-search"></i>
                    <input type="text" value={input}onChange={(e)=>setInput(e.target.value)}/>
                    <i className="bi bi-mic-fill"></i>
                 </div>
            {
                !search_btn ?  <div className="btn-body">
                <button className='btn' type='submit' onClick={handleclick}>Google Search</button>
                <button className='btn'>I'm Feeling Lucky</button>
             </div> 
             :
             <div className="btn-body">
                <button className='btn' type='submit' onClick={handleclick} style={{display:"none"}}>Google Search</button>
             </div>
            }
                
                </div>
    </div>
  )
}
