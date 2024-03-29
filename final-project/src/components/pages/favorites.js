import React, { useEffect, useState } from 'react'
import Card from '../product/index'
import Header from '../header/index'


const Favorites = () => {
    // const favorites = [];
    const favData = sessionStorage.getItem("favorites")
    const favoritesData = JSON.parse(favData)
    // console.log(favorites)
    // if(favoritesData!=null){
    //     favorites.push.apply(favorites, favoritesData)
    //     sessionStorage.setItem("favorites", JSON.stringify(favoritesData))
    // }else{
    //     sessionStorage.setItem("favorites", JSON.stringify(favorites))
    // }
    // const [favorites, setFavorites] = useState([]);

    // useEffect(() => {
    //     const favData = sessionStorage.getItem("favorites");
    //     const favoritesData = JSON.parse(favData);

        // if (favoritesData !== null) {
        //     setFavorites(favoritesData);
        //     localStorage.setItem("favorites", JSON.stringify(favoritesData));
        // } else {
        //     localStorage.setItem("favorites", JSON.stringify([]));
        // }
    // }, []);
    
  return (
    <>
        <Header/>
        <div class="container-fluid d-flex flex-wrap gap-3 justify-content-center">
            {
                favoritesData ? (
                    favoritesData?.filter((item, index) => favoritesData.findIndex(obj => obj.id === item.id) === index).map((item,index)=>{
                        return <Card key={index} item={item}/>;
                    })
                ):(
                    <h1>Loading...</h1>
                )
            }
            
        </div>
    </>
  )
}

export default Favorites