import {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
 
    const [input, setInput] = useState({ })
     const Navigateuser=useNavigate();

    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
    
      setInput(values => ({ ...values, [name]: value }))
    }


    const handleSubmit =(e)=>{
       
        e.preventDefault()
        
         axios.post("http://localhost:4000/student",input,{
            Headers:{"Content-type":"multipart/form-data"},
        }).then(alert("Registration successfully !!!!"))
        Navigateuser("/login")

    }

  return (
   <>
   

    <div class="container">
    <div class="text">
      Registration Form......
    </div>
    <form action="#"  >
      <div class="form-row">
        <div class="input-data">
          <input type="text" required onChange={handleInput} name='empid' value={input.empid} />
          <div class="underline"></div>
          <label for="">employee id</label>
        </div>
        <div class="input-data">
          <input type="text" required onChange={handleInput} name='name' value={input.name} />
          <div class="underline"></div>
          <label for=""> Name</label>
        </div>
      </div>

      <div class="form-row">
        <div class="input-data">
          <input type="text" required onChange={handleInput} name='email' value={input.email} />
          <div class="underline"></div>
          <label for=""> Email</label>
        </div>

        <div class="input-data">
          <input type="text" required onChange={handleInput} name='password' value={input.password} />
          <div class="underline"></div>
          <label for="">Password</label>
        </div>
      </div>

      <div class="form-row">
        <div class="input-data textarea">

          <div class="form-row submit-btn">
            <div class="input-data">
              <div class="inner"></div>
              <input type="submit" value="submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  
   </>
  )
}

export default Registration
