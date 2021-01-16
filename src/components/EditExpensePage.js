import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {Link} from 'react-router-dom';
import {removeExpense, editExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id ,expense);
    this.props.history.push('/');
    }

  onClick = (props) => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick} >Remove</button>
      </div>
    );
  }

};

const mapStateToProps= (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: ({id}) => dispatch(removeExpense({id})),
  editExpense: (id, expense) => dispatch(editExpense(id , expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
// const EditExpensePage =(props)=> {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense)=> {
//           props.dispatch(editExpense(props.expense.id ,expense));
//           props.history.push('/');
//           console.log('updated', expense);
//       }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({id: props.expense.id}));
//         props.history.push('/');
//       }} >Remove</button>
//     </div>
//   );
// }
