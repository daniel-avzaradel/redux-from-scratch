import { describe, it, expect } from "vitest";

const createStore = <State, Action>(initialState: State, reducer: (state: State, action: Action) => State) => {
    return {
        getState: () => {},
        dispatch: () => {},
        subscribe: () => {}
    }
}

describe("Our redux", () => {
    it("should update state predictably", () => {
        const initialState = { count: 0 };
    })
})