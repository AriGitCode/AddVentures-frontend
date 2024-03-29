
const reducer =(state, action)=>{
    switch(action.type){
        case 'OPEN_LOGIN':
            return{...state, openLogin: true};
        
        case 'ClOSE_LOGIN':
            return{...state, openLogin: false};

        case 'UPDATE_USER':
            return{...state, currentUser: action.payload};

        default:
            throw new Error ('No matched action!');
    }
}

export default reducer