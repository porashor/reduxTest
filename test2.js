const increment = "increment"
const decrement = "decrement"




function Incre(){
    return{
        type: increment
    }
}
function Decre(){
    return{
        type: decrement
    }
}


//main data
const count = { count : 0}

function ReDucer(state = count, action){
    if(action.type === increment){
        return {
            count: state.count + 1
        }
    }else{
        return{
            count: state.count - 1
        }
    }
}



const {createStore} = require("redux")


const store = createStore(ReDucer)


store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(Incre())
store.dispatch(Incre())
store.dispatch(Incre())
store.dispatch(Incre())
store.dispatch(Incre())