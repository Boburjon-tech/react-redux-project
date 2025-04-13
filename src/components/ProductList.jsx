import { useLoaderData } from "react-router-dom"
import Product from "./Product";

function ProductList() {

const {data: {products}} = useLoaderData();

console.log(products);

  return (
    <div>
      {products.map((product)=>{
        return <Product key={product.id} product={product}/>
      })}
    </div>
  )
}

export default ProductList
