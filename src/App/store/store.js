import { combineReducers, createStore } from 'redux';
import { REST_ADR, REST_RESSOURCES } from '../config/config';
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
    switch (action.type) {
        case 'INIT':
            const pimage = fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then(f => f.json())
            const pmemes = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`).then(f => f.json())
            Promise.all([pimage, pmemes])
                .then(arr_arr => {
                    store.dispatch({ type: 'INIT_ARRAYS', values: arr_arr })
                })
            return state;
        case 'INIT_ARRAYS':
            return { ...state, images: action.values[0], memes: action.values[1] };
        case RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST:
            return { ...state, images: action.values };
        case RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST:
            return { ...state, memes: action.values };
        case RESSOURCES_PUBLIC_ACTIONS.ADD_MEME:
            return { ...state, memes: [...state.memes, action.value] }
        default: return state;
    }
}


export const currentInitialState = {
    titre: "",
    text: "azertyuiop",
    x: 0, y: 10,
    fontSize: 10,
    color: "#000000",
    fontWeight: "500",
    underline: false, italic: false,
    frameX: 0, frameY: 0,
    imageId: -1
}
export const CURRENT_PUBLIC_ACTIONS = Object.freeze({
    UPDATE_CURRENT: 'UPDATE_CURRENT',
    CLEAR_MEME: 'CLEAR_MEME',
    SAVE_MEME: 'SAVE_MEME'
})
const currentReducer = (state = currentInitialState, action) => {
    console.log(action.type);
    switch (action.type) {
        // case 'INIT':
        //     console.log('Current a recu INIT');
        //     return state;
        case CURRENT_PUBLIC_ACTIONS.UPDATE_CURRENT:
            return { ...state,...action.value }
        case CURRENT_PUBLIC_ACTIONS.CLEAR_MEME:
            return { ...currentInitialState }
        default:
            return state
    }
}


const store = createStore(combineReducers({ current: currentReducer, ressources: ressourceReducer }));
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({ type: 'INIT' })
// store.dispatch({ type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST, values: [{ id: 0 }, { id: 1 }] })
// store.dispatch({ type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST, values: [{ id: 10 }, { id: 11 }] })
// store.dispatch({ type: RESSOURCES_PUBLIC_ACTIONS.ADD_MEME, value: { id: 20 } })


export default store;