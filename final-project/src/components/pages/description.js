import React, {useState, useEffect} from 'react'
import Header from '../header/index'
import { useParams } from 'react-router-dom';

const favorites = []
const favData = sessionStorage.getItem("favorites")
const favoritesData = JSON.parse(favData)
if(favoritesData!=null){
    Array.prototype.push.apply(favorites, favoritesData)
}
const Description = () => {
  const [favorite,setFavorite] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  
  // const prodData = sessionStorage.getItem("descProduct")
  // const product = JSON.parse(prodData)
  useEffect(() => {
    console.log(favorites)
    
    const fethcData = async () => {
      
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fethcData();
    
  }, [id]);
  useEffect(()=>{
    if (favorites.some(fav => fav.id === product?.id)){
      setFavorite(true)
    }else{
      setFavorite(false)
    }
     },[favorites, product])
  const handleClick = (e)=>{
    e.preventDefault();
    if (!favorites.some(fav => fav.id === product.id)){
      setFavorite(true)
        favorites.push(product)
        sessionStorage.setItem("favorites", JSON.stringify(favorites));
    }else{
        const indexToRemove = favorites.findIndex(fav => fav.id === product?.id);
        setFavorite(false)
        if (indexToRemove !== -1) {
            favorites.splice(indexToRemove, 1);
        }
        sessionStorage.setItem("favorites", JSON.stringify(favorites));
    }
    
};
  return (
    <>
      <Header/>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-3">
            <img
              src={product?.image}
              class="img-fluid card"
              alt="Product Image"
            />
          </div>
          <div class="col-lg-6">
            <h2 class="fw-bold">{product?.title}</h2>
            <p class="text-muted">{product?.category}</p>
            <h3 class="my-4">${product?.price}</h3>
            <p class="mb-4">
              {product?.description}
            </p>
            <div>
              <button class="btn btn-outline-secondary btn-sm" type="button" onClick={handleClick}>
                {favorite ? "Remove from favorites": "Add to favorites"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description