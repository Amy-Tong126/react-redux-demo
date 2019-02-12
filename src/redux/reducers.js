
const reducers = (state={
    todos:[],
    visibilityFilter:"SHOW_ALL"
}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return Object.assign({}, state, {
                todos: [...state.todos,{content:action.content,complete:false,id:action.id}]
            });
        case "TOGGLE_TODO":
            return Object.assign({}, state, {
                todos: [...state.todos].map(function (el, index) {
                    if (el.id === action.id) {
                        el.complete=!el.complete;
                    }
                    return el
                })
            });
        case "SET_VISIBILITY_FILTER":
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        default: return state;

    }
};
export default reducers;