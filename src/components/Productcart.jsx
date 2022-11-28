import { Link } from "react-router-dom"

const Productcart = ({product}) => {

  return <div className="productcart">
    {
      product.map((value)=>{
       const {id,title,price,thumbnail} = value;
       
       return <div key={id} className="cart">
        <Link to={`/product/${id}`}>
        <div className="data">
          <img src={thumbnail} alt="" />
          <span>
            <h3>{title}</h3>
            <h3>{price}</h3>

          </span>
        </div>
        </Link>
        </div>
      })
    }
  </div>
}

export default Productcart