import { CHANGE_INPUT_VALUE, DELETE_ITEM_IN_LIST, PUSH_ITEM_TO_LIST}
  from './ActionTypes';
const defaultState = {
  inputValue: "",
  list: ["Java", "PHP", "React"],
}
export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === PUSH_ITEM_TO_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_ITEM_IN_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
