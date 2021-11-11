import { useState } from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const DUMMY_EXPENSES = [
        {
            title: 'Tire Carrier',
            date: new Date(2021, 9, 15),
            price: 1300,
            id: Math.random().toString()
        },
        {
            title: 'Ditch Lights',
            date: new Date(2021, 9, 20),
            price: 400,
            id: Math.random().toString()
        },
        {
            title: 'Ram Mount',
            date: new Date(2021, 9, 25),
            price: 20,
            id: Math.random().toString()
        },
        {
            title: 'Batwing',
            date: new Date(2021, 10, 25),
            price: 1000,
            id: Math.random().toString()
        }
    ]

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        })

    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
