import { describe, it, expect } from 'vitest';

const createStore = <State, Action>(initialState: State, reudcer: Action) => {
    let state = initialState
    const getState = () => state;

}