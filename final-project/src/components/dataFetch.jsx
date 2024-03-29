import React, {useEffect, useState} from 'react'
import Card from "./product/index";
import { useNavigate  } from 'react-router-dom';

const DataFetch = () => {
    const [data,setData] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [query, setQuery] = useState("");
    const [visibleItems, setVisibleItems] = useState(10);

    useEffect(()=>{
        const fethcData = async()=>{
            try{
                //const response = await fetch("https://api.escuelajs.co/api/v1/products");
                const response = await fetch("https://fakestoreapi.com/products");
                const jsonData = await response.json();
                setData(jsonData);
                setFilteredProducts(jsonData);
            }catch(error){
                console.log("error", error)
            }
        };
        setTimeout(() => {
            fethcData();
        }, 1000);
    },[])

    const handleLoadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 10);
    };
    const history = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const filteredData = data.filter(
            (product)=>
                product.title.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
        );
        setFilteredProducts(filteredData);
        history(`/home/search=${encodeURIComponent(query)}`);
    }
    const handleClear = (e) =>{
        setQuery("")
        setFilteredProducts(data);
    }
  return (
    <>
        <div class="d-flex mx-auto rounded w-25 gap-2">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
            onChange={
                (e)=>setQuery(e.target.value.toLowerCase())
            } 
            value={query}
            />
            <span class="border-0 d-flex gap-2">
                <button type='submit' class="btn btn-primary" disabled={!query} onClick={handleSubmit}>
                    SEARCH
                </button>
                <button type='submit' class="btn btn-danger" disabled={!query}   onClick={handleClear}>
                    CLEAR
                </button>
            </span>
        </div>
        <div class="container-fluid d-flex flex-wrap gap-3 justify-content-center">
            {
                data ? (
                    filteredProducts?.slice(0, visibleItems).map((item,index)=>{
                        return <Card key={index} item={item}/>;
                    })
                ):(
                    <h1>Loading...</h1>
                )
            }
            
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3">
            {visibleItems < filteredProducts?.length && (
                <button class="btn btn-primary " onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    </>
  )
}

export default DataFetch