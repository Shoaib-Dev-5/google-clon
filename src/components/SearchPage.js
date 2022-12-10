import React, { useContext, useEffect, useState } from 'react'
import { Search } from './Search'
import '../css/SearchPage.css';
import { Global } from '../App';
import { key } from './Key';
import { id } from './Key';
import axios from 'axios';

export const SearchPage = () => {
    const{input,setInput}=useContext(Global);
    const[data,setData]=useState('');
    const[searchTime,setSearchTime]=useState('');
    useEffect(()=>{
        const fun=async()=>{
            const result=await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${input}`);
            setData(result.data.items);
            setSearchTime(result.data.searchInformation);
        }
        fun();
    },[input]);
  return (
    <>
        {console.log('api',data)}
        <section className='search-page'>
            <div className="search-page-first">
            <div className="logo">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </div>
                <div className="search-field-page">
                    <Search search_btn/>
                </div>
                    
                    <div className="right">
                        <i className="bi bi-gear"></i>
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                        <i className="bi bi-person-fill"></i>
    
                    </div>
                    {
                    }
            </div>
         
            <div className="action-icon">
                    <div className="action-search">
                    <i className="bi bi-search"></i>All
                    </div>
                    <div className="action-news">
                    <i className="bi bi-newspaper"></i>News
                    </div>
                    <div className="action-image">
                    <i className="bi bi-card-image"></i>Images
                    </div>
                    <div className="action-video">
                    <i className="bi bi-play-btn"></i>Videos
                    </div>
                    <div className="action-more">
                    <i className="bi bi-three-dots-vertical"></i>More
                    </div>
                    <div className="action-right">
                        <div className="action-tools">
                            Tools
                        </div>
                    </div>
            </div>
        </section>
        <hr />

                    {/* contect data */}
                    <div className="content">
                        <p className="about-search" id='ab'>About 4,040,000,000 results (0.49 seconds) </p>
                        
                        { data &&(
                            data.map((val,ind)=>{
                                return(
                                    <div className="" key={ind}>
                                        <div className="link">
                                        <a href={val.link} target="_blank">
                                        <p>{val.formattedUrl}</p>
                                        <h3>{val.title}</h3>
                                        </a>
                                        </div>
                                        <div className="des">
                                    <p>{val.snippet}</p>
                                    </div>
                                    </div>
                                )
                            })
                        )}
                        {/* <div className="link">
                        <a href="">
                        <p>https://freecodecapm.org</p>
                        <h3>FreecodeCapm.org</h3>
                        </a>
                            </div>
                            
                        <div className="des">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur hic id ea reiciendis, ipsa perferendis? Voluptas consequuntur quo saepe repellat?</p>
                        </div> */}

                    </div>
    </>
  )
}
