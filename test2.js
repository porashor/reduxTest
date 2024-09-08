const increment = "increment"
const decrement = "decrement"
const WithPayLoad = "withpay"




//state init
const count = { count : 0}





//reducer function create 
function ReDucer(state = count, action){
    if(action.type === increment){
        return {
            count: state.count + 1
        }
    }
    else if (action.type ===  WithPayLoad){
        return {
            count : state.count + action.payload
        }
    }
    else{
        return{
            count: state.count - 1
        }
    }
}


//push function inside the dispatch 



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
//use with the payload the function 

function WithPay(pay){
    return{
        type: WithPayLoad,
        payload : pay
    }
}

//create the redux
const {createStore} = require("redux")

//init the store 
const store = createStore(ReDucer)

//subscribe the store 
store.subscribe(()=>{
    console.log(store.getState())
})

//final dispatch
store.dispatch(Incre())
store.dispatch(Incre())
store.dispatch(Incre())
store.dispatch(Incre())
store.dispatch(Incre())
store.dispatch(WithPay(600))