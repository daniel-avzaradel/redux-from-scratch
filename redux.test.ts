import { describe, it, expect } from 'vitest';

const createStore = <State, Action>(initialState: State, reducer: (state: State, action: Action) => State) => {

    let state = initialState;
    const getState = () => state;
    const subscribers = new Set<(state: State) => void>;

    return {
        getState,
        dispatch: (action: Action) => {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber(state))
        },
        subscribe: (callback: (state: State) => void) => {
            subscribers.add(callback);
            return () => subscribers.delete(callback)
        }
    }
} 

describe("Redux Store", () => {
    it("Should update state predictably", () => {
        let initialState = { count: 0 };
        type Actions = { type: "increment" } | { type: "decrement" } | { type: "incrementBy", payload: number };

        const reducer = (state: typeof initialState, action: Actions) => {
            switch(action.type) {
                case "increment":
                    return { count: state.count + 1 };
                case "decrement":
                    return { count: state.count - 1 };
                case "incrementBy":
                    return { count: state.count + action.payload };
                default:
                    return state;    
            }
        }

        const store = createStore(initialState, reducer);
        expect(store.getState()).toEqual({count: 0});
        store.dispatch({type: "increment"});
        expect(store.getState()).toEqual({count: 1});
        store.dispatch({type: "decrement"});
        expect(store.getState()).toEqual({count: 0});
        store.dispatch({type: "incrementBy", payload: 5});
        expect(store.getState()).toEqual({count: 5});
    })
})