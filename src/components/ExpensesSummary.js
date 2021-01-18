import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component{


  render(){
    return(
      <div>
        {`Viewing ${this.props.expenses.length} expenses totalling
        ${numeral(selectExpenseTotal(this.props.expenses) / 100).format('$0,0.00')}`}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
