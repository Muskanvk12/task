import './main.css'
import Card from './Card'

function Main({Data}){
    console.log(Data)
    return(
        Data.map((ele)=>{
            return(
                <div className="mainWrapper">
                    <Card Data = {ele}/>
                </div>
            )
        })
        
    )
}

export default Main;