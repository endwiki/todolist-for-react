import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPushItemToListAction, getChangeInputValueAction,
  getDeleteItemInListAction } from './store/ActionCreators';

const TodoList = (props) => {
  const { inputValue, list, handleBtnClick,
      handleDeleteItem, handleInputChange } = props;
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={handleDeleteItem.bind(this, index)}
              >
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
      inputValue: state.inputValue,
      list: state.list
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getChangeInputValueAction(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      const action = getPushItemToListAction();
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = getDeleteItemInListAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchProps)(TodoList);
