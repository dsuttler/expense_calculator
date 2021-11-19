import {useState} from "react";

import './Expenses.css'
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [yearFilter, setYearFilter] = useState('2021')

    const onFilterYearHandler = year => {
        setYearFilter(year)
    }

    const filteredExpenses = props.items.filter(item => item.date.getFullYear() == yearFilter)

    return (

        <Card className={'expenses'}>
            <ExpensesFilter onFilterYear={onFilterYearHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>

    )
}

export default Expenses;