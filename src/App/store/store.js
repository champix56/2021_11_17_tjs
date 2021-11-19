import {createStore} from 'redux';
export const ressourcesInitialState = {
    memes: [],
    images: []
};
export const RESSOURCES_PUBLIC_ACTIONS = Object.freeze({
    REPLACE_MEMES_LIST: 'REPLACE_MEMES_LIST',
    REPLACE_IMAGES_LIST: 'REPLACE_IMAGES_LIST',
    ADD_MEME: 'ADD_MEME',
})
function ressourceReducer(state = ressourcesInitialState, action) {
    console.log(action);
    switch (action.type) {
        case RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST:
            return { ...state, images: action.values };
        case RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST:
            return { ...state, memes: action.values };
        case RESSOURCES_PUBLIC_ACTIONS.ADD_MEME:
            return { ...state, memes: [...state.memes, action.value] }
        default: return state;
    }
}

const store=createStore(ressourceReducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST, values: [{ id: 0 }, { id: 1 }] })
store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST, values: [{ id: 10 }, { id: 11 }] })
store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.ADD_MEME, value: { id: 20 }})


export default store;