import { createSlice } from "@reduxjs/toolkit"
// In Slice first we have to define the initial ,action pf the website
const initialState = []

const cartSlice = createSlice({ //yaha hum aik custom slice bna rhy hain or us per createSlice ka method call kr rhy hain
    //name aur initialState or reducers or extrareducers k variables createSlice k object k andar define hoty hain ya phir inhe is method k argyments b keh skty hain
    name: 'cart',//yaha per hum slice ka nam define kr rhy hain hain
    initialState,
    reducers: {
        // Within reducers, we define functions to manage specific parts of the application state.
        // These functions specify how the state should change in response to dispatched actions.

        add(state, action) {
            // In this 'add' reducer, we aim to add an item to the state array.
            // However, direct mutation of the state is not allowed in Redux.
            // To maintain immutability, we should return a new state array with the payload appended.

            state.push(action.payload);
            // The above line directly mutates the state, which is not recommended in Redux.
            // To ensure immutability, we should return a new state array instead:
            // return [...state, action.payload];
            // but here createSlice() is taking care for that
        },

        remove(state, action) {
            // In this 'remove' reducer, we intend to filter out an item from the state array based on its ID.
            // We correctly use the 'filter' method to achieve this.

            // state = state.filter((item) => item.id !== action.payload);
            // While filtering the state is a correct approach, reassigning 'state' directly here doesn't modify the original state.
            // To ensure immutability and proper state update, we should return the result of the 'filter' method:
            return state.filter((item) => item.id !== action.payload);
        }
    }

})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer