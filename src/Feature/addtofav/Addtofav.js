import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: []
};

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addFav: (state, action) => {
            const cardId = action.payload;
            const existingCard = state.cards.find(card => card.id === cardId);
            const cardToAdd = !existingCard ? { id: cardId, isFav: true } : null;
            state.cards.push(cardToAdd)
        },
        removeFav: (state, action) => {
            state.cards = state.cards.filter(card => card.id !== action.payload);
        }
    }
});

export const { addFav, removeFav } = cardSlice.actions;
export default cardSlice.reducer;
