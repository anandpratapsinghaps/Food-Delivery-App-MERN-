import React from 'react'

export default function Card() {
    return (
    <div className='d-inline'> 
        <div>
            <div className="card mt-3" style={{"width": "18rem" , "maxHeight":"360px"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">jo bhi khana hai khud bna lo!</h5>
                <p className="card-text">kha le bsdk!</p>
            <div className="container w-100">
                <select className="m-2 h-100 rounded" style={{"background":"#FFC374"}}>
                {Array.from(Array(6),(e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
                </select>

            <select className="m-2 h-100 rounded" style={{"background":"#FFC374"}}>
                <option value="half">Half</option>
                <option value="full">Full</option>
            </select>
            <div className='d-inline h-100 fs-5'>
                Total Price
            </div>
        </div>
    </div>
</div>
</div></div>
    )
}
