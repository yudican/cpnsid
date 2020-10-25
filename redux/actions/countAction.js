import { DECREMENT, INCREMENT } from "../types";

export const incrementCounter = () => ({
    type: INCREMENT
})

export const decrementCounter = () => ({
    type: DECREMENT
})