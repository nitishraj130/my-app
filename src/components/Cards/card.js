import './cards.css' 


function card(props) {
    return <div style={{border: "1px solid #ccc", display: "inline-block",width: "30%"}}>
        
        <h3>{props.head}</h3>
        <img src={props.image} className='pic'></img>
        <p>{props.desc}</p>
    </div>
}
export default card;