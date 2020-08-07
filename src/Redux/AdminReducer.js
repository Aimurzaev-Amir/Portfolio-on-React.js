const authorization = "ADMINREDUCER/AUTHORIZATION";

let initialState = {
  login: "aimurzaev",
  password: "3223",
  validation: false,
//   message: null
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case authorization:
      if (action.authData.login === state.login && action.authData.password === state.password) {
        return {
          ...state,
          validation: true,
        //   message: "hello sir!"
        }
      }
      else{ 
        return{
            ...state,
        validation: false,
        // message: "fuck you, bitch!"
        }
      }
    default:
      return state;
  }
};

export const setAuthData = (authData) => {
  return {
    type: authorization,
    authData,
  };
};

export default AdminReducer;
