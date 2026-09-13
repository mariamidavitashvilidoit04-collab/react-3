import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="w-70 h-130 border-black border-2 rounded-lg p-4 m-2 ">
      <img src={product.thumbnail} alt={product.title} />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p>Price: ${product.price}</p>

      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
