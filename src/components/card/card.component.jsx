import '../card/card.style.css';

const Card = ({monster:{id,name,email}}) => {
    return(
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2`} alt={name}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;