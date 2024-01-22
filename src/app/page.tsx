'use client'
import { Metadata } from 'next';
import Link from 'next/link';
import React from "react";


export const metadata: Metadata = {
  title: 'HomePage',
  description: 'descriptionMetadata',
}

export default function Home() {
 
  // useEffect(() => {
  //   const fetchData = async () =>{
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check : ",data)
  //   }
  //   fetchData();
  // },[])
  return (
    <div>
      <ul>
        <li style={{margin :"10px 0"}}>
          <Link href={"/facebook"}>FACEBOOK</Link>
        </li>   
        <li style={{margin :"10px 0"}}>
          <Link href={"/tiktok"}>TIKTOK</Link>
        </li>
        <li style={{margin :"10px 0"}}>
          <Link href={"/youtube"}>YOUTUBE</Link>
        </li>
      </ul>
      
      
    </div>
  )
}
