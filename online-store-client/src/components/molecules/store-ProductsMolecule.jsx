import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import StoreGrid from "../atoms/store-GridListAtom";
import BuyProduct from '../../services/store-BuyProduct';



export default function Products(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8080/products/");
            setProducts(response.data);
        };
        fetchData();
    },[]);

    function handleOnBuy(event){        
        BuyProduct.handleOnBuy(event);
    };
    

    return(        
            <div>
               <StoreGrid products ={products} handleOnBuy={handleOnBuy}/>
            </div>
    );
}