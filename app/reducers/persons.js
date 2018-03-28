const persons = {name:'Xcho'}

export default function getPersons(state=persons, action){
    if(action.type==='GET_PERSONS'){
        return action.newPersons;
    }
    return state;
}