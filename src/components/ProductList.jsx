import { useLoaderData } from "react-router-dom"
import Product from "./Product";

function ProductList() {

const {data: {products}} = useLoaderData();

console.log(products);

  return (
    <div className=" grid grid-cols-4 gap-x-6 gap-y-6">
      {products.map((product)=>{
        return <Product key={product.id} product={product}/>
      })}
    </div>
  )
}

export default ProductList
