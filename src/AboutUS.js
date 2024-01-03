import React, { useEffect ,useState} from 'react'
import {  useNavigate } from 'react-router-dom'

const AboutUS = () => {
    
    const Navigate = useNavigate()

    // const getuserArr=localStorage.getItem("Myname")

    
    

    const [logindata,setLogindata]=useState([]);

    const birthday=()=>{ 
     
     const  getuserArr=window.localStorage.getItem("Myname")

      if(getuserArr && getuserArr.length){
        setLogindata(getuserArr);
      
      }



    

}

useEffect(()=>{
birthday();
},[])


    const handleDelete=()=>{
        localStorage.clear()
        alert("localStorage clear.....!!")
        Navigate("/login");
    }
    return (
        <>
            <center>

            {
                logindata.length===0 ? <h1>Error</h1> : 
                <>
                <h1 style={{marginTop:"200px"}}>Welcome  .....{logindata} .!!!</h1>
                
                <button style={{padding :"15px" , backgroundColor: "red",marginTop :"150px"}} onClick={handleDelete}>LogOut</button>
                </>
            }

                
            </center>
        </>
    )
}

export default AboutUS
