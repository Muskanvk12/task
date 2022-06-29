import './createNamePlate.css'
import Axios from 'axios';
let userInput=[]

export default function CreateNamePlate() {
    
    const getInput = (event) => {
        if(event.target.id === "name"){
            userInput[0] = event.target.value;
        }
        if(event.target.id === "house"){
            userInput[1] = event.target.value;
        }
    }


    const sendData = async() =>{
        if(userInput.length<2){
            alert("Input field cannot be empty")
            return
        }
        const res = await Axios.post("http://localhost:3001/newnameplate/newplate", userInput)
        alert(`post request has been made to the server with data: ${userInput[0]} and ${userInput[1]}`)
        
    }

   
  return (
    <div className="createWrapper">
        <div className="createForm">
        <img src="/Images/image.png" alt="" />
            <input type="text" className="createFormInput" id='name' onChange={getInput} placeholder="Title of Your Name Plate"/>
            <input type="text" className="createFormInput" id='house' onChange={getInput} placeholder="Your House Number"/>
            <button className='createFormBtn createFormInput' onClick={()=>{sendData()}}>Create your Name Plate</button>
        </div>
    </div>
  )
  
}
