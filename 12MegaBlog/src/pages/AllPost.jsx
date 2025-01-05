import React,{useState,useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container,Postcard } from '../components'
function AllPost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex felx-wrap'>
{
    posts.map((post)=>(<div key={post.$id} className='p-2 w-1'>
        <Postcard post={post}/>
    </div>
        ))
}
            </div>
        </Container>
    </div>
  )
}

export default AllPost