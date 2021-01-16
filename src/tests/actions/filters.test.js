import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', ()=> {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set and date action object', ()=> {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate sortByAmount action object',()=>{
  const action=sortByAmount();

  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  });
});

test('should generate sortByDate action object',()=> {
  const action = sortByDate();

  expect(action).toEqual({
    type:'SORT_BY_DATE'
  });
});

test('should generate set text filter object with value',()=>{
  const action = setTextFilter('New Text Value');

  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'New Text Value'
  });
});

test('should generate set text filter object without value',()=>{
  const action= setTextFilter();

  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:''
  });
});
