export default function numbers(state = [], action) {
  switch (action.type) {
    case 'ADD_NUMBERS':
      return action.payload;
    default:
      return state;
  }
}
