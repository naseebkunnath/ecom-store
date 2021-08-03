import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'ecom-store',
    storage: window.localStorage
});
  
const store = new Vuex.Store({
    state: {
        products : [
            {
                id : 1,
                title : "Chelsea Shoes",
                price : 200,
                description : "Best Drip in the Market",
                imageurl : "images/chelsea-shoes.png"
              },
              {
                id : 2,
                title : "Kimono",
                price : 50,
                description : "Classy, Stylish, Dope",
                imageurl : "images/kimono.png"
              },
              {
                id : 3,
                title : "Watch",
                price : 2500,
                description : "Elegance built in",
                imageurl : "images/rolex.png"
              },
              {
                id : 4,
                title : "Wallet",
                price : 80,
                description : "Sleek, Trendy, Clean",
                imageurl : "images/wallet.png"
              },
              {
                id : 5,
                title : "Lady Handbags",
                price : 230,
                description : "Fabulous, Exotic, Classy",
                imageurlurl : "images/handbag.png"
              },
              {
                id : 6,
                title : "Casual Shirts",
                price : 30,
                description : "Neat, Sleek, Smart",
                imageurl : "images/shirt.png"
              },
              {
                id : 7,
                title : "T Shirts",
                price : 30,
                description : "T Shirt",
                imageurl : "images/shirt.png"
              },
        ],
        cart : [],
        totalCount: 200
    },
    mutations: {
        addToCart(state, product){
            let exist = state.cart.find((item) => {
                return item.id == product.id;
            });

            if(exist) {
                state.cart = state.cart.map((item) => {
                    if(item.id == exist.id){
                        exist.quantity++;
                        return exist;
                    }
                    return item;
                }) 
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        removeCartItem(state, item){
            state.cart = state.cart.filter((cartItem) => {
                return cartItem.id != item.id
            })
        },
    },
    getters: {
        totalCartItems: (state) => {
            console.log(state.cart);
            return state.cart.length;
        }
    },
    plugins: [vuexPersist.plugin]
});

export default store;