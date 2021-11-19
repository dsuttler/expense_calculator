import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)

    }

    const [formState, setFormState] = useState(false)

    const onClickHandler = () => {
        setFormState(!formState)
    }

    return (
        <div className={'new-expense'}>
            {formState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler={onClickHandler}/>}
            {!formState && <button type={'button'} onClick={onClickHandler}>New Expense</button>}
        </div>
    )
}

export default NewExpense