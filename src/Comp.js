import { useState,useEffect } from "react";

function Comp()
{
   const[count,setcount]=useState(0)
   const[msg,setmsg]=useState('initial message')

   useEffect(()=>
{
    console.log(msg)
    console.log(`you clicked ${count} times`)
},[count,   ])


    return(
        <>
        <p>You clicked {count} times</p> 
        <button onClick={()=>setcount(count+1)}>click for update</button>
        <br />
        <button onClick={()=>setmsg('msg updated successfully')}>update msg</button>
        </> 
    )
}
export default Comp;