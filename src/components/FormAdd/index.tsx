/* eslint-disable prettier/prettier */
import * as Style from './styles';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { Debt } from '../../types/Debt';

type Props = {
  addDebt: (newDebt: Debt) => void;
};

const FormAdd = ({ addDebt }: Props) => {
  const [enableButton, setEnableButton] = useState(true);
  const [values, setValues] = useState({
    id: Math.floor(Math.random() * 65536),
    category: '',
    amount: 0,
    status: '',
    dueDate: '',
  });

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addDebt(values);
    setValues({
      id: Math.floor(Math.random() * 65536),
      category: '',
      amount: 0,
      status: '',
      dueDate: '',
    });
  };

  const validation = () => {
    if (
      values.category.length > 0 &&
      values.dueDate.length > 0 &&
      values.status.length > 0 &&
      values.amount > 0
    ) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  };

  useEffect(() => {
    validation();
  }, [values.category, values.dueDate, values.status, values.amount]);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  
  return (
    <>
      <Style.Container>
        <Style.InputContent>
          <Style.Label>Categoria</Style.Label>
          <Style.Input
            value={values.category}
            placeholder="Descrição do débito"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, category: event.target.value })
            }
          />
        </Style.InputContent>
        <Style.InputContent>
          <Style.Label>Valor</Style.Label>
          <Style.Input
            value={values.amount}
            type="number"
            placeholder="R$ 0.00"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, amount: parseInt(event.target.value, 10) })
            }
          />
        </Style.InputContent>
        <Style.InputContent>
          <Style.Label>Status</Style.Label>
          <Style.Select
            name="Status"
            value={values.status}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, status: event.target.value })
            }
          >
            <option value="" hidden>
              Selecione
            </option>
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Pago</option>
          </Style.Select>
        </Style.InputContent>

        <Style.InputContent>
          <Style.Label>Data de Vencimento</Style.Label>
          <Style.Input
            value={values.dueDate}
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            name="dataFim"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, dueDate: event.target.value })
            }
          />
        </Style.InputContent>

        <Style.Button disabled={enableButton} onClick={handleSave}>
          Adicionar
        </Style.Button>
      </Style.Container>
    </>
  );
};

export default FormAdd;
