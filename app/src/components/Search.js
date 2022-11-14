import React, { useState,useContext, useEffect } from 'react'
import Card from './card/Card'
import cartContext from '../context/cart/cartContext'
const Search = () => {
  const updateData = async ()=> {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`; 
    
    let dataa = await fetch(url);
    let parsedData = await dataa.json()
    console.log(parsedData.meals)
    // just adding price as it wasn't present in api data(rest of the data is still from api only)
    parsedData.meals[0].price=50
    parsedData.meals[1].price=150
    parsedData.meals[2].price=80
    parsedData.meals[3].price=40
    parsedData.meals[4].price=250
    parsedData.meals[5].price=190
    parsedData.meals[6].price=140
    parsedData.meals[7].price=180
    parsedData.meals[8].price=220
    parsedData.meals[9].price=300
    parsedData.meals[10].price=350
    setdataf(parsedData.meals)
  }
  useEffect(() => {
    updateData(); 
    // eslint-disable-next-line
  }, [])
    const [dataf, setdataf] = useState([])
    const context=useContext(cartContext)
    const{add}=context
    
  return (
    <>
        {dataf!==[]&&dataf.map((e)=>{
            return(<>
            <Card key={e.idMeal} data={e} add={add}/></>)
        })}
    </>
  )
}

export default Search