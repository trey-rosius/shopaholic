import {
    v4 as uuidv4
}from "uuid";

export const state = () =>({
    cartUIStatus: "idle",
    cart:[],
    products:[]
});
export const getters = {
    featuredProducts: state => state.products.slice(0, 3),
    women: state => state.products.filter(el => el.gender === "Female"),
    men: state => state.products.filter(el => el.gender === "Male"),
    cartCount: state => {
      if (!state.cart.length) return 0;
      return state.cart.reduce((ac, next) => ac + next.quantity, 0);
    },
    cartTotal: state => {
      if (!state.cart.length) return 0;
      return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
    },
    cartItems: state => {
      if (!state.cart.length) return [];
      return state.cart.map(item => {
        return {
          id: item.id,
          quantity: item.quantity
        };
      });
    },
    
  };

export const mutations ={
    updateCartUI: (state, payload) => {
        state.cartUIStatus = payload;
      },
      clearCart: state => {
        //this clears the cart
        (state.cart = []), (state.cartUIStatus = "idle");
      },
      addToCart: (state, payload) => {
        let itemfound = state.cart.find(el => el.id === payload.id);
        itemfound
          ? (itemfound.quantity += payload.quantity)
          : state.cart.push(payload)
      },
      addOneToCart: (state, payload) => {
        let itemfound = state.cart.find(el => el.id === payload.id)
        itemfound ? itemfound.quantity++ : state.cart.push(payload)
      },
      removeOneFromCart: (state, payload) => {
        let index = state.cart.findIndex(el => el.id === payload.id)
        state.cart[index].quantity
          ? state.cart[index].quantity--
          : state.cart.splice(index, 1)
      },
      removeAllFromCart: (state, payload) => {
        state.cart = state.cart.filter(el => el.id !== payload.id)
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
                    //"x-api-key":"XOKgw1aCa47YgBkcaLtQt78kW7bZGj5U6QDVOIQh"
                    }
                }
               
            )
            .then(response => response.json())
            .then(data =>{
                //console.log(data);
                commit("updateProducts",data);
            });
        }catch(err){
            console.log(err);
        }
    }
}
