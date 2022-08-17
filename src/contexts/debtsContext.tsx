import { createContext, ReactNode, useState } from 'react';
import { Debt } from '../types/Debt';
import { debtsService } from '../services/debt.service';


//Type Props do children
type DebtContextProps = {
  children: ReactNode;
};
//Type Props do Context
type DebtContextType = {
  debts: Debt[];
  setDebts: (newState: Debt[]) => void;
  createDebt: (data: Debt) => void;
  deleteDebt: (id: number) => void;
  syncApi: () => void;
};

export const DebtContext = createContext<DebtContextType>(
  // eslint-disable-next-line prettier/prettier
  {} as DebtContextType
);

export const DebtContextProvider = ({ children }: DebtContextProps) => {
  const [debts, setDebts] = useState<Debt[]>([]);

  //Função para criar o debito e seta no Context
  const createDebt = async (data: Debt) => {
    const debt = {
      id: Math.floor(Math.random() * 65536),
      category: data.category,
      amount: data.amount,
      status: data.status,
      dueDate: data.dueDate,
    };
    setDebts([...debts, debt]);
  };

  //delete de uma debito da api
  const deleteDebt = async (id: number) => {
    const dataApi = await debtsService.getAllDebts();

    const resultSearch = dataApi.filter((item: Debt) => item.id == id);

    if (resultSearch.length === 0) {
      const result = debts.filter((item) => item.id !== id);
      setDebts(result);
    } else {
      await debtsService, deleteDebt(id);
      const resultRemoved = debts.filter((item) => item.id !== id);
      setDebts(resultRemoved);
    }
  };

  const syncApi = async () => {
    const dataApi = await debtsService.getAllDebts();

    //Pega a diferença dos arrays da api e do Context
    const result = debts.filter(
      (objContext: Debt) =>
        !dataApi.some((objectApi: Debt) => objContext.id === objectApi.id),
    );

    //Salva na Api as tarefas que estão só no Context
    result.forEach((debt: Debt) => {
      debtsService.postDebt(debt);
    });
  };
  return (
    <DebtContext.Provider
      value={{
        debts,
        setDebts,
        createDebt,
        deleteDebt,
        syncApi,
      }}
    >
      {children}
    </DebtContext.Provider>
  );
};
