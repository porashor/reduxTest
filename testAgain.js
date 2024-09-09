//constant declar 
const I = 'increment'
const D = "decrement"
const A = "AddData"
//made the main data
const data = {
    count : 0,
    user: ["parashar", "Pronob", "Poritos"]
}
//action create via function 
//for increment
function In(){
    return{
        type: I
    }
}
//for decrement
function De(){
    return{
        type: D
    }
}
//for Adding the data 
function Ad(Da){
    return{
        type: A,
        payload: Da
    }
}
//made the reducer 
function Reduce(state = data, action){
    switch (action.type) {
        case I: 
            return{
                ...state,
                count: state.count + 1
            }
        case D: 
            return{
                ...state,
                count: state.count - 1
            }
        case A: 
            return{
                ...state,
                user: [...state.user,action.payload]
            }
    
        default:
            return state;
    }
}
//init the redux store
const {createStore} = require('redux')
//build the store 
const store = createStore(Reduce)
//subscribe the store 
store.subscribe(()=>{
    console.log(store.getState())
})
//dispactching the data
store.dispatch(Ad("pars"))
store.dispatch(Ad("pars"))
store.dispatch(Ad("pars"))
store.dispatch(In())
store.dispatch(In())
store.dispatch(In())
store.dispatch(In())
store.dispatch(In())