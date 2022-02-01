import './ExpenseForm.css';
import React, { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
        // const [userInput, setUserInput] = useState({
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: '',
        // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput(() => {});
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};

        };


    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value);
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);
       setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input
                    type='text'
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' onChange = {amountChangeHandler} min="0.01" step="0.01" value={enteredAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} min="2021-01-01" max="2023-01-01" value={enteredDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit' >Submit</button>
        </div>
    </form>
    );
};

export default ExpenseForm