import { PUSH_ITEM_TO_LIST, DELETE_ITEM_IN_LIST, CHANGE_INPUT_VALUE }
  from './ActionTypes';

export const getChangeInputValueAction = (value) => {
    return {
      type: CHANGE_INPUT_VALUE,
      value
    };
};

export const getDeleteItemInListAction = (index) => {
    return {
        type: DELETE_ITEM_IN_LIST,
        index
    };
};

export const getPushItemToListAction = (index) => {
    return {
        type: PUSH_ITEM_TO_LIST,
        index
    };
};
