import { useEffect, useState } from "react";
import CartContext from "./cartContext";
const CartState = (props) => {
    const data=[{
        id:1,
        price:100,
        name:"burgerhub",
        place:"delhi",
        quantity:0
    },
    {
        id:2,
        price:0,
        name:"yoy",
        place:"ahmedabad"
        
    }]
  const [cart, setCart] = useState([])
  const [total, settotal] = useState(0)
  const add=(e)=>{
    settotal(total+e.price)
    console.log(e)
    let index=-1;
    for(let i=0;i<cart.length;i++){
        console.log(cart)
        if(cart[i].idMeal===e.idMeal){
            index=i;
            break;
        }
    }
    console.log("index")
    console.log(index)
    if(index===-1){

        let f=e;
        f.quantity=1
        setCart(cart.concat(f))
    }
    else{
        
        let tcart=cart
        tcart[index].quantity+=1
        // let tcart=cart
        // tcart
        setCart(tcart)
    }
    console.log("yo")
    console.log(cart)
  }
  const sub=(e)=>{
    settotal(total-e.price)
    console.log(e)
    let index=-1;
    for(let i=0;i<cart.length;i++){
        if(cart[i].idMeal===e.idMeal){
            index=i;
            break;
        }
    }
    if(e.quantity===1){
        let tcart=cart.filter((c)=>{
          return(e.idMeal!==c.idMeal)
        })
        setCart(tcart)
    }
    else{
        
        let tcart=cart
        tcart[index].quantity-=1
        // let tcart=cart
        // tcart
        setCart(tcart)
    }
    console.log("yo")
    console.log(cart)
  }
  // const addprop=(x)=>{
  //   setProp(prop.concat(x))
  // }
  return (
    <CartContext.Provider value={{ cart, setCart,add,total,sub }}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartState;