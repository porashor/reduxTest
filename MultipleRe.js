//constant init 
const i = 'increment'
const d = "decrement"
const p = "payload"



//init data 
const data = {
    count: 1,
    data: ["suger", "salt"]
}





//action init 
function PosI(){
    return{
        type: i
    }
}
function PosD(){
    return{
        type: d
    }
}
function PosP(pay){
    return{
        type: p,
        payload: pay
    }
}

//1st reducer 

function FirRe(state = data, action ){
    switch (action.type) {
        case i:
            return{
                ...state,
                count : state.count + 1
            };
        case d:
            return{
                ...state,
                count : state.count - 1
            };
        case p:
            return{
                ...state,
                data : [...state.data, action.payload]
            };
    
        default:
            return state;
    }
}
function SecRe(state = data, action ){
    switch (action.type) {
        case i:
            return{
                ...state,
                count : state.count + 1
            };
        case d:
            return{
                ...state,
                count : state.count - 1
            };
        case p:
            console.log(action.payload.name)
            return{
                ...state,
                extra : [action.payload]
            };
    
        default:
            return state;
    }
}

//all task of store 
const {createStore, combineReducers} = require("redux")

//combining the reducer in redux
const  rootCon = combineReducers({
    First: FirRe,
    Second: SecRe
})



const store = createStore(rootCon)



store.subscribe(()=>{
    console.log(store.getState())
})




store.dispatch(PosP("Parashar"))



