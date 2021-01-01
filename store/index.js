import {
    v4 as uuidv4
}from "uuid";

export const state = () =>({
    cart:[],
    product:[]
});


export const mutations ={
 addToCart:(state,formOutput) =>{
     formOutput.id = uuidv4();
     state.cart.push(formOutput);
 },
    updateProducts:(state,data) =>{
        state.products = data;
    }
}

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
            .then(response => response.json())
            .then(data =>{
                commit("updateProducts",data);
            });
        }catch(err){
            console.log(err);
        }
    }
}
