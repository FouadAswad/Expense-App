import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=> {
  const state = expensesReducer(undefined,{type:'@@INIT'});

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {type:'REMOVE_EXPENSE',id:expenses[1].id};
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {type:'REMOVE_EXPENSE',id:'-1'};
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense',()=>{
  const dummyExpense = {id:'999',description:'bitch',note:'',amount:6969,createdAt:0};
  const action = {type:'ADD_EXPENSE', expense:dummyExpense};

  const state = expensesReducer(expenses,action);
  expect(state).toEqual([...expenses, dummyExpense]);
});

test('should edit an expense',()=>{
  const update = {description:'CHANGED'};
  const action = {type:'EDIT_EXPENSE', id:'1', updates:update};
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe('CHANGED');
});

test('should not edit any expense if expense not found',()=>{
  const action = { type:'EDIT_EXPENSE', updates:{id:'999',description:'CHANGED'} };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(state);

});
