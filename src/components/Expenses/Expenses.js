import {useState} from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [yearFilter, setYearFilter] = useState('2021')

    const onFilterYearHandler = year => {
        setYearFilter(year)
    }

    const filteredExpenses = props.items.filter(item => item.date.getFullYear() == yearFilter)

    return (

        <Card className={'expenses'}>
            <ExpensesFilter onFilterYear={onFilterYearHandler}/>
            {filteredExpenses.length === 0
                ? (<p>No expenses found.</p>)
                : (filteredExpenses.map((expense) => (<ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                    />))
                )
            }
        </Card>

    )
}

export default Expenses;