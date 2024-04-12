import React,{useState,useRef, useEffect} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data=useCart();
    const priceRef = useRef();
    let options=props.options;
    let priceOptions=Object.keys(options);
    // let foodItems = props.foodItems;
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const handleAddToCart= async()=>{
        await dispatch({type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice,qty:qty,size:size})
        console.log(data)
    }
    

    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])


    return (
    <div className='d-inline'> 
        <div>
            <div className="card mt-3" style={{"width": "20rem" , "maxHeight":"450px"}}>
                <img src={props.foodItems.img} className="card-img-top" alt="..." style={{ height: "180px", objectFit: "fill" }}/>
                <div className="card-body">
                <h5 className="card-title">{props.foodItems.name}</h5>
                <p className="card-text">{props.foodItems.description}</p>
            <div className="container w-100">
                <select className="m-2 h-100 rounded" style={{"background":"#FFC374"}} onChange={(e)=> setQty(e.target.value)}>
                {Array.from(Array(6),(e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
                </select>

            <select className="m-2 h-100 rounded" style={{"background":"#FFC374"}} ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                {priceOptions.map((data)=>{
                    return<option key={data} value={data}>{data}</option>
                })}
            </select>
            <div className='d-inline h-100 fs-5'>
            ₹{finalPrice}/-
            </div>
        </div>
        <hr />
        <button className={`btn btn-warning justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
    </div>
</div>
</div></div>
    )
}
