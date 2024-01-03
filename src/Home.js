import {useState} from 'react'
import {  useNavigate } from 'react-router-dom'

const Home = () => {

     const Navigate=useNavigate()
    const [input, setInput] = useState("")
    const [psw, setPsw] = useState("")


const handleSubmit =()=>{
      let  url=`http://localhost:4000/student/?input=${input}`;
      fetch(url).then((res)=>{
    return res.json();

      }).then((resp)=>{
       console.log(resp[0].password)

         if(Object.keys(resp).length===0){
            document.getElementById('pwder').innerHTML="Invalid User!";
         }
         else{
            if(resp[0].password===psw)
            {
                localStorage.setItem("Myname",resp[0].name);
                localStorage.setItem("email",resp[0].email);
                Navigate("/login")
            }
            else{
                document.getElementById("pwder").innerHTML="Invalid password";
            }
         }
      })
}


const hanldeButton=()=>{
    Navigate("/registration")
    
}
  
   
  return (
    <>
    <div class="container1">
    <div class="text">
      Login Form
    </div>
    <form  >
      <div class="form-row">
        <div class="input-data">
          <input type="text" required onChange={(e)=>setInput(e.target.value)} name='email' value={input} />
          <div class="underline"></div>
          <label for="">Email</label>
        </div>
      
      </div>
 
      <div class="form-row">
 
        <div class="input-data">
          <input type="text" required onChange={(e)=>setPsw(e.target.value)} name='psw' value={psw} />
          <div class="underline"></div>
          <label for="">Password</label>
        </div>
      </div>
 
      <div class="form-row">
        <div class="input-data textarea">
 
          <div class="form-row submit-btn">
            <div class="input-data">
              <div class="inner"></div>
              <input type="submit" value="Login" onClick={handleSubmit} />
               
            </div>
          </div>
        </div>
      </div>
    </form>
    <div>
    <button style={{padding:"12px",paddingLeft:"15px" ,marginLeft:"300px" ,position:"absolute",marginTop:"-70px",fontSize:"15px",backgroundColor:" #9f01ea"}} onClick={hanldeButton}>SingUp</button>
    </div>

    <p id='pwder'></p>
  </div>

 
 
    </>
  )
}

export default Home
