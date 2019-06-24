import React from 'react';

import axios from 'axios';


export function getApi(url, para) {

   return  axios.get(url,para)
        .then(function (response) {
            
         return (response.data);
        })
        .catch(function (error) {
            
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

}

export function postApi(url, para) {

    return "post"

}


export default { getApi, postApi };