import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, setEndDate, setStartDate, sortByDate, sortByAmount, wrapper;
beforeEach(()=>{
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters = {filters}
    setTextFilter = {setTextFilter}
    sortByDate = {sortByDate}
    sortByAmount = {sortByAmount}
    setStartDate = {setStartDate}
    setEndDate = {setEndDate}
    />);
});

test('should render ExpenseListFilters correctly', ()=> {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', ()=> {
  wrapper.setProps({filters: altFilters});
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
  const value = 'New Criteria';
  wrapper.find('input').at(0).simulate('change',{
    target:{value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle date changes',()=>{
  const startDate = moment(0).add(4,'years');
  const endDate = moment(0).add(8,'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', ()=>{
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

test('should sort by date', ()=> {
  const e ={
    target:{value:'date'}
  };
  wrapper.find('select').prop('onChange')(e);
  expect(sortByDate).toHaveBeenCalled();
  expect(sortByAmount).not.toHaveBeenCalled();
});

test('should sort by amount', ()=> {
  const e ={
    target:{value:'amount'}
  };
  wrapper.find('select').prop('onChange')(e);
  expect(sortByAmount).toHaveBeenCalled();
  expect(sortByDate).not.toHaveBeenCalled();
});
