import uuid from 'uuid';

//Add expense
export const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}
) =>
  ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
  }
});

// REMOVE_EXPENSE

export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
  //  use to have id in an expense object, failed test case(andrews)
  // if it breaks everything then return to below code
  // expense: {
  //   id
  // }
});
// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
