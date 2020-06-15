import React from 'react';

import axios from 'axios';
import AuthenticationService from '../services/store-AuthenticationService';
import LoginAuth from '../utils/store-RouteAuth';

class BuyProduct {

      handleOnBuy = async(event) =>{
        // console.log("in handleonBuy");
        // const isUserLoggedIn = AuthenticationService.isUserLoggedIn();        
        // if(!isUserLoggedIn){
        //     console.log(isUserLoggedIn);
        //     LoginAuth();
        // }
        event.preventDefault();
        const productId =  event.target.id;
        const api = "http://localhost:8080/cart/addProduct/"+productId+"/";
        console.log(api);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdWRoaXIiLCJleHAiOjE1OTI1NDYyNTF9.-rwl6pL7ugYbzdMyBAu28KnzqD0q_WPbDli57gUadNfj2UGHCr7-RFBeGwFPThqCzY__1VqYHv5yaudZ7c8YyQ'
          }
        const res = await axios.get(api, {
            headers: headers
          });
        if (!alert('Success!')) { window.location.reload(); }
    };
}
export default new BuyProduct()