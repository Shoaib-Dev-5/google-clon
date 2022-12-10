import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { key } from './Key';
import { id } from './Key';

export const UseSearchEngine = ({term}) => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fun=async()=>{
            const result=axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${term}`);
            setData(result);
        }
        fun();
    },[term]);

  return {data}
}
