//state
//action
//reducer
//store

const {createStore} = require("redux")


const incre = "Increment"
const decre = "Decrement"
const Rest = "Reset"
const InV = "incrementValue"
const valuea = 700
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

//action with payload
function Par(value){
    return{
        type: InV,
        payload: value
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
    }else if(action.type === InV){
        return{
            ...state,
            count: state.count + action.payload
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
store.dispatch(Par(1000))



