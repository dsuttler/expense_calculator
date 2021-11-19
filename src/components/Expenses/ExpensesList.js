import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {

    // If the list is not empty return the list of expenses
    if (props.items.length > 0) {
        return (
            <ul className='expenses-list'>
                {props.items.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        price={expense.price}
                        date={expense.date}
                    />
                ))}
            </ul>
        )}

    // If the list is empty, return this h2
    else{
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
}

export default ExpensesList