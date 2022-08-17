import { useContext, useEffect } from 'react';
import './App.css';
import FormAdd from './components/FormAdd';
import { DebtContext } from './contexts/debtsContext';
import { debtsService, deleteDebt } from './services/debt.service';
import { Debt } from './types/Debt';
import Header from '../src/components/Header';
import Grid from './components/Grid';
import Resume from './components/Resume/Resume';

function App() {
  const { createDebt, debts, setDebts } = useContext(DebtContext);
  const addDebt = (newDebito: Debt) => {
    createDebt({
      id: newDebito.id,
      category: newDebito.category,
      amount: newDebito.amount,
      status: newDebito.status,
      dueDate: newDebito.dueDate,
    });
  };

  const removeItem = (id: number) => {
    deleteDebt(id);
  };

  const debtChange = async (id: number, status: string) => {
    const newList = [...debts];

    const dataApi = await debtsService.getAllDebts();
    // eslint-disable-next-line prefer-const
    let resultSearch = dataApi.filter((item: Debt) => item.id === id);
    if (resultSearch.length === 0) {
      // eslint-disable-next-line prefer-const
      for (let i in newList) {
        if (newList[i].id === id) {
          newList[i].status = status;
        }
      }
      setDebts(newList);
    } else {
      const bodyTask = dataApi.filter((item: Debt) => item.id === id);

      const newState = newList.map((obj: Debt) => {
        if (obj.id === id) {
          bodyTask[0].status = status;
          return { ...obj, status: status };
        }

        return obj;
      });

      setDebts(newState);
      await debtsService.editDebt(id, bodyTask[0]);
    }
  };

  const getAllDebtsApi = async () => {
    const dataApi = await debtsService.getAllDebts();
    setDebts(dataApi);
  };

  useEffect(() => {
    getAllDebtsApi();
  }, []);

  return (
    <div className="App">
      <Header />
      <Resume />
      <FormAdd addDebt={addDebt} />
      <Grid item={debts} onChange={debtChange} removeItem={removeItem} />
    </div>
  );
}

export default App;
