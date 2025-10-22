import { describe, it, expect } from 'vitest';

const createStore = <State, Action>(initialState: State, reducer: (state: State, action: Action) => State) => {

    let state = initialState;
    const getState = () => state;

    return {
        getState,
        dispatch: (action: Action) => {
            state = reducer(state, action)
        },
        subscribe: () => {} 
    }
}

describe("our redux", () => {
    it("should update state predictably", () => {
        const initialState = { count: 0 };
        type Actions = { type: "increment" } | { type: "decrement" }
        const reducer = (state: typeof initialState, action: Actions) => {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + 1 };
                case 'decrement':
                    return { count: state.count - 1 };
                default:
                    return state; 
            }
        }
    })
})