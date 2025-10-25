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

