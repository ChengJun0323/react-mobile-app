const initialState = {
  userInfo: {
    name: 'admin'
  }
}

const user = (state=initialState, action) => {
  switch (action.type) {
    case 'login':
      return state;
    default:
      return state
  }
}

export default user;
