export const initialState={
    user:null,
    name:'',
    college:'',
    yearOfStudy:'',
    email:''
};

const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                user:action.user,
                name:action.name,
                college:action.college,
                yearOfStudy:action.yearOfStudy,
                email:action.email
            }
        default:
            return state
    }
};

export default reducer;