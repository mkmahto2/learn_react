import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"


function AppMapProduct(){
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
    return (
        <div>
            {productComponents}
        </div>
    )
}
export default AppMapProduct