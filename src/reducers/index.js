
const reducer = (state = {}, action) => {

    switch (action.type) {
      case 'DISPATCH_NUMBERS':{
          console.log(action);
        return { ...state, say : 'Hello World Redux', numbers: action.payload};}
      default:
        return state;
    }
    
  };
  
  export default reducer;
  