
interface ICardProps{
    product : Record<string, any>;
}

const Cards = (props :ICardProps)=>{
    const {product}= props;
    return(
        <div style={{border: "1px solid white"}}>
         <h5> {product?.title}</h5>

       </div>
    )
}

export default Cards;