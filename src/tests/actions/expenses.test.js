import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=> {
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abc'
  });
});

test('should setup editExpense action object',()=> {
  const action = editExpense( '123abc', {note:'New Note Value'} );

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      note:'New Note Value'
    }
  });
});

test('should setup add expense action object with provided value', ()=>{
  const expenseData = {
    description: 'Rent',
    amount:109500,
    createdAt:1000,
    note:'This was last months rent'
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup addExpense action object with default value',()=> {
  const action = addExpense();

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description:'',
      note:'',
      amount:0,
      createdAt:0,

    }
  });
})
