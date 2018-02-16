import { HelloState } from './records';

const CHANGE_NAME = 'CHANGE_NAME';

const initialState = new HelloState();

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      console.log(type, payload);
      return state.set('name', payload.name);
    default:
      return state;
  }
}

// actions --------------------

export function changeName(name) {
  console.log(name);
  return { type: CHANGE_NAME, payload: { name } };
}

// selectors ------------------

export function getName(state) {
  return state.hello.name;
}
