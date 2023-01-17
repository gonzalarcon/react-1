import React from "react";
import { Card as BCard} from 'react-bootstrap';


const Cards = (prop)=> {
    const  {title, source, describe} = prop
return (
    // <div className="card">
    //     <img variant="card-img-top" src={prop.source} className="col-sm" alt="..."/>
    //     <div className="card-body">
    //         <h3 className="card-text">{prop.title}</h3>
    //     </div>
    // </div>
<BCard className="container" style={{with:'18rem'}}>
    <BCard.Img variant="top" src={source}/>
    <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Text>{describe}</BCard.Text> 
    </BCard.Body>
</BCard>
    )
}





export default Cards;