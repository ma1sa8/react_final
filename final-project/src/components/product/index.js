import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const favorites = []
const favData = sessionStorage.getItem("favorites")
const favoritesData = JSON.parse(favData)
if(favoritesData!=null){
    Array.prototype.push.apply(favorites, favoritesData)
}
const Index = ({item}) => {
    const [favorite,setFavorite] = useState(false);
    const [show, setShow] = useState(false);

    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (e)=>{
        setShow(false)
        // if (!favorites.includes(item)){
        //     favorites.push(item)
        //     setFavorite(true)
        // }else{
        //     setFavorite(false)
        //     const index = favorites.indexOf(item)
        //     favorites.splice(index,1)
        // }
    
        if (!favorites.some(fav => fav.id === item.id)) {
            favorites.push(item)
            setFavorite(true);
            sessionStorage.setItem("favorites", JSON.stringify(favorites));
        } else{
            alert("Product is already in favorites")
        }
        
        
    };
    const removeFromFav = (e) =>{
        if (!favorites.some(fav => fav.id === item.id)){
            alert("This product is not in favorites")
        }
        setShow(false)
        const indexToRemove = favorites.findIndex(fav => fav.id === item.id);
            if (indexToRemove !== -1) {
                favorites.splice(indexToRemove, 1);
            }
        setFavorite(false);
        sessionStorage.setItem("favorites", JSON.stringify(favorites));
    }
    // const removeFavorite = () => {
    //     const updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    //     console.log(updatedFavorites)
    //     sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // };
    // const goToDesc = (e)=>{
    //     sessionStorage.setItem("descProduct", JSON.stringify(item))
    //     window.location.href = "/product"
    // }
    useEffect(()=>{
    if (favorites.some(fav => fav.id === item?.id)){
      setFavorite(true)
    }else{
      setFavorite(false)
    }
     },[favorites, item])
  return (
    <>
        <div class="col-3 mt-5 h-50">
            <div class="card">
                <Link to={`/product/${item.id}`} class="nav-link">
                    <div  role="button">
                        <img src={item.image} class="card-img-top" height={"500vh"}/>
                        <div class="card-body">
                            <hr class="mt-2"/>
                            <div class="d-flex flex-row justify-content-between p-3 mid">
                                <div class="d-flex flex-column">
                                    <small class="text-muted mb-1">{item.category}</small>
                                    <div class="d-flex flex-row">
                                        <div class="d-flex flex-column ml-1">
                                            <small class="ghj">{item.title}</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column">
                                    <small class="text-muted mb-2">PRICE</small>
                                    <div>
                                        <h6>${item.price}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div class="d-flex mb-4 justify-content-center" >
                    <button type="button" onClick={handleShow} class="btn btn-outline-secondary btn-sm">
                        <small>{favorite ? "Remove from favorites": "Add to favorites"}</small>
                    </button>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wishlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to add or remove this product?</Modal.Body>
        <Modal.Footer>
          <button class="btn btn-danger" onClick={removeFromFav}>
            Remove from favorites
          </button>
          <button class="btn btn-success" onClick={handleClick}>
            Add to favorites
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Index