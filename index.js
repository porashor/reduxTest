//state defining
const counterState = {
    count :  0
}
const userState = {
    user: [
        {user: "parashar"}
    ]
}




//const defining
const Increment = "Increment"
const Decrement = "Decrement"
const ADD_USER = "Add user"



//all are action
function INC(){
    return{
        type : Increment
    }
}
function DEC(){
    return{
        type : Decrement
    }
}

function ADU(){
    return{
        type: ADD_USER,
        payload : {name: "ananya"}
    }
}


//reducer function cerating 

function CRE(state = counterState, action){
    if(action.type === Increment){
        return{
            ...state,
            count : state.count += 1
        }
    }else if(action.type === Decrement){
        return{
            ...state,
            count : state.count -= 1
        }
    }
}