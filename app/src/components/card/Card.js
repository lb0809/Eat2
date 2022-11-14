import React, { useEffect, useState } from 'react'
import './Card.css'
const Card = (props) => {
    const{data,add,sub}=props
    const{quantity}=data
    
    const{strMeal,strMealThumb,price}=data
    const [quant, setquant] = useState(0)
    useEffect(() => {
     // eslint-disable-next-line 
    }, quant)
    const handleaddclick=()=>{

        setquant(quant+1)
        console.log("quant is:")
        console.log(quant)
        add(data)
        
    }
    const handlesubclick=()=>{
        setquant(quant-1)
        sub(data)
        
    }
  return (
    <>
    <div className="container py-2 w-50">
    <div className="food-card food-card--vertical">
                    <div className="food-card_img" >
                        <img src={strMealThumb} alt=""/>
                        <a href="#!"><i className="fa fa-heart"></i></a>
                    </div>
                    <div className="food-card_content">
                        <div className="food-card_title-section">
                            <a href="#!" className="food-card_title">{strMeal}</a>
                            {/* <a href="#!" className="food-card_author">Burger</a> */}
                        </div>
                        <div className="food-card_bottom-section space-between  ">
                            {/* <div className="space-between">
                                <div>
                                    <span className="fa fa-fire"></span> 220 - 280 Kcal
                                </div>
                                <div className="pull-right">
                                    <span className="badge badge-success">Veg</span>
                                </div>
                            </div> */}
                                <div className="food-card_price">
                                    <span>{`${price}₹`}</span>
                                </div>
                            <hr/>
                            {quantity===undefined?<div className='container pb-5'> <button className="btn btn-primary" onClick={handleaddclick}>Add to Cart</button></div>:<div className="space-between">
                                <div className="food-card_order-count">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1" onClick={handlesubclick} ><i className="fa fa-minus"></i></button>
                                        </div>
                                        <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={quantity===undefined?quant:quantity}/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1" onClick={handleaddclick}><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                </div>
    </>
  )
}

export default Card