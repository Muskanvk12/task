import './createNamePlate.css'

export default function CreateNamePlate() {
    let userInput=[]
    const getInput = (event) => {
        if(event.target.id === "name"){
            userInput[0] = event.target.value;
        }
        if(event.target.id === "house"){
            userInput[1] = event.target.value;
        }
    }

    const sendData = () =>{
        console.log(userInput)
    }
    
   
  return (
    <div className="createWrapper">
        <div className="createForm">
            <input type="text" className="createFormInput" id='name' onChange={getInput}/>
            <input type="text" className="createFormInput" id='house' onChange={getInput}/>
            <button className='createFormBtn' onClick={sendData}>Create your Name Plate</button>
        </div>
    </div>
  )
  
}
