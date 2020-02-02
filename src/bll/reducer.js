

const handlers = {
    DEFAULT: state => state,
}

const reducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}

export default reducer