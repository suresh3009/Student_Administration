var arr = []
export default function reducer(state = arr, action) {
    const { type, payload } = action;
    if (type == "addingobj") {
        state.push(payload)
    }
    return state
}