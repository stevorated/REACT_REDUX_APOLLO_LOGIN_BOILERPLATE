const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CREATE_POST':
      // console.log('payload',payload)
        return state[0].createdBy.id === payload[0].createdBy.id ? [...payload.concat(state)] : state
    case 'PUSH_COMMENT':
      console.log('payload',payload)
        const { id } = payload.post
        return state.map((post) => {
          if (post.id === id) {
            return {
              ...post,
              comments: post.comments.concat(payload)
            }
          } else {
            return post
          }
        })
    return state
    case 'FETCH_PROFILE_POSTS':
      return state[0] === undefined ? payload : [...state.concat(payload)]
    case 'CLEAR_PROFILE_POSTS':
      return initialState
    case 'DELETE_POST':
        return state.filter((post)=> {
          return post.id !== payload
        })
    default:
      return state
  }
}

