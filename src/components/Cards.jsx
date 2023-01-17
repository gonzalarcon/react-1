import React from "react";
import { Card as BCard} from 'react-bootstrap';


const Cards = (prop)=> {
    const  {title, source, describe} = prop
return (
<BCard className="container" style={{with:'300px'}}>
    <BCard.Img style={{with: "18em"}} variant="top" src={source}/>
    <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Text>{describe}</BCard.Text> 
    </BCard.Body>
</BCard>
    )
}


export default Cards;