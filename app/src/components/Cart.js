import React,{useContext, useEffect,useState} from 'react'
import cartContext from '../context/cart/cartContext'
import Card from './card/Card'
const Cart = () => {
    const context=useContext(cartContext)
    const{cart,setCart,add,total,sub}=context
    console.log("first")
    console.log(context)
  return (
    <>
    <div className="container">
    {cart.length===0?<div>Empty Cart</div>:cart.map((c)=>{
        console.log("first")
        console.log(c)
        return(
        <>
            <Card key={c.id} data={c} add={add} sub={sub} />
        </>
    )
    })}
    </div>
    {cart.length!==0&&<div className="container d-flex" style={{"marginLeft":"500px"}}>
        <div className="">
           <h2 style={{"fontSize":"24px","fontWeight":"300"}}> To Pay: </h2>
        </div>
        <div className="">
            <h2 style={{"fontSize":"24px","fontWeight":"300"}}>{total}</h2>
        </div>
    </div>}
    </>
  )
}

export default Cart