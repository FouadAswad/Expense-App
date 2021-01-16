import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => {


  return (
    <div>
      <Link to={`/edit/${props.id}`}><h3>Description: {props.description}</h3> </Link>
      <p>Amount: {props.amount} Created At: {props.createdAt}</p>

    </div>
  );
}

export default ExpenseListItem;
