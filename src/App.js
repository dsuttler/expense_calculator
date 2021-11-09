import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            title: 'Tire Carrier',
            date: new Date(2021, 9, 15),
            price: 1300
        },
        {
            title: 'Ditch Lights',
            date: new Date(2021, 9, 20),
            price: 400
        },
        {
            title: 'Ram Mount',
            date: new Date(2021, 9, 25),
            price: 20
        },
        {
            title: 'Batwing',
            date: new Date(2021, 10, 25),
            price: 1000
        }
    ]

    const addExpenseHandler = expense => {
        console.log('In APPPPPP')
        console.log(expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
