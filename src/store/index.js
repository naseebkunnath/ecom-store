import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'
import jwtDecode from "jwt-decode";

const vuexPersist = new VuexPersist({
    key: 'ecom-store',
    storage: window.localStorage
});
  
const store = new Vuex.Store({
    state: {
        cart : [],
        token: ''
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
        clearCart(state) {
            state.cart = [];
        },
        setToken(state, token) {
            state.token = token;
        },
        removeToken(state) {
            state.token = '';
        }
    },
    getters: {
        totalCartItems: (state) => {
            return state.cart.length;
        },
        cartTotalPrice: (state) => {
            let totalPrice = 0;

            state.cart.forEach(function(item) {
                console.log(item);
                totalPrice += item.price * item.quantity;
            }); 

            return totalPrice;
        },
        token: (state) => {
            return state.token;
        },
        authUser: state => {
            try {
              const token = state.token;
              return jwtDecode(token);
            } catch (error) {
              return null;
            }
        }
    },
    plugins: [vuexPersist.plugin]
});

export default store;