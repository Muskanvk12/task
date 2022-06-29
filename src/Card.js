import './card.css'

function Card({Data}){
    return(
        
        <div className="cardWrapper">
            <div className="Title Rubik">{Data.name}</div>
            <div className="disc">House no. {Data.HouseNo}</div>
        </div>
    )
}

export default Card;