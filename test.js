//state
//action
//reducer
//store

const {createStore} = require("redux")


const incre = "Increment"
const decre = "Decrement"
const Rest = "Reset"

const initState = {count: 0}

function In(){
    return{
        type: incre
    }
}
function De(){
    return{
        type: decre
    }
}
function Re(){
    return{
        type: Rest
    }
}

function redu(state = initState, action){
    if(action.type === incre){
        return{
            ...state,
            count: state.count += 1 
        }
    }
    else if(action.type === decre){
        return{
            ...state,
            count: state.count -= 1 
        }
    }
    else if(action.type === Rest){
        return{
            ...state,
            count: 0
        }
    }
}



const store = createStore(redu)



store.subscribe((a)=>{
    console.log(store.getState())
})


store.dispatch(In())
store.dispatch(In())
store.dispatch(In())
store.dispatch(In())
store.dispatch(Re())


