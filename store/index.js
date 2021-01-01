import {
    v4 as uuidv4
}from "uuid";

export const state = () =>({
    cart:[],
    product:[]
});


export const actions ={

    async getProducts({
        state,commit
    }){
        if(state.products.length) return;

        try{
            await fetch(
                "https://fvdwj65u51.execute-api.us-east-2.amazonaws.com/production/products",{
                    headers:{
                    "Content-Type":"application/json",
                    "x-api-key":process.env.AWS_API_KEY
                    }
                }
               
            )
        }
    }
}
