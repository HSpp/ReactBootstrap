import {Increment,Decrement} from '../action'
export default(state={First:11},action)=>{
    switch (action.type){
        case Increment:
            return {...state,First:state['First']+1}
        case Decrement:
            return {...state,First:state['First']-1}
        default:
            return state
    }
}