const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state,count1: state.count1 +1 }
        case 'dec':
            return {...state,count1: state.count1 -1 }
        case 'reset':
            return {...state,count1: 0 }
        case 'install':
            return {...state,count1: action.payload }

        case 'inc2':
            return {...state,count2: state.count2 +2 }
        case 'dec2':
            return {...state,count2: state.count2 -2 }
        case 'reset2':
            return {...state,count2: 2}
        case 'install2':
            return {...state,count2: action.payload }
        default:
            return state
    }
}
export default reducer;