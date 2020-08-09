const authorization = "ADMINREDUCER/AUTHORIZATION";

let initialState = {
  login: "aimurzaev",
  password: "3223",
  validation: false,
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case authorization:
      if (action.authData.login === state.login && action.authData.password === state.password) {
        return {
          ...state,
          validation: true,
        };
      } else {
        return {
          ...state,
          validation: false,
        };
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
