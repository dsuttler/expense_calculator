import {useState} from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [yearFilter, setYearFilter] = useState('')

    const onFilterYearHandler = year => {
        setYearFilter(year)
        console.log('Expenses -> ' + year)
    }

    return (
        <div>
            <ExpensesFilter onFilterYear={onFilterYearHandler} />
            <Card className={'expenses'}>
                <ExpenseItem
                    title={props.items[0].title}
                    date={props.items[0].date}
                    price={props.items[0].price}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    date={props.items[1].date}
                    price={props.items[1].price}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    date={props.items[2].date}
                    price={props.items[2].price}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    date={props.items[3].date}
                    price={props.items[3].price}
                />
            </Card>
        </div>
    )
}

export default Expenses;