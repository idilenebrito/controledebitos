import React, { useContext } from 'react';
import ResumeItem from '../ResumeItem';
import * as Style from './style';
import { BsCalendarX, BsCalendarCheck } from 'react-icons/bs';
import { BiDollarCircle } from 'react-icons/bi';
import { DebtContext } from '../../contexts/debtsContext';

const Resume = () => {
  const { debts } = useContext(DebtContext);

  //Função que pega a data atual e formata
  const getDateCurrent = () => {
    const dateCurrent = new Date();
    const day = dateCurrent.getDate();
    const month = dateCurrent.getMonth() + 1;
    const year = dateCurrent.getFullYear();

    const dateCurrentFinal = `${year}${'-'}${
      month < 10 ? `0${month}` : `${month}`
    }${'-'}${day}`;

    return dateCurrentFinal;
  };

  //Função que filtra as debitos pendentes - atrasados
  const countDebtsLate = () => {
    const debtsPending = debts.filter(
      (item) => item.dueDate <= getDateCurrent() && item.status == 'Pendente'
    );
    let sum = 0.0;
    debtsPending.forEach((item) => (sum += item.amount));
    console.log(sum);
    return sum;
  };

  //Função que filtra as debitos pendentes - em dia
  const countDebtsPeding = () => {
    const debtsPending = debts.filter(
      (item) => item.dueDate >= getDateCurrent() && item.status == 'Pendente'
    );
    let sum = 0.0;
    debtsPending.forEach((item) => (sum += item.amount));
    console.log(sum);
    return sum;
  };

  //Função que soma debitos
  const countDebtsSum = () => {
    let sum = 0.0;
    debts.forEach((item) => (sum += item.amount));
    console.log(sum);
    return sum;
  };

  return (
    <Style.Container>
      <ResumeItem
        Icon={BiDollarCircle}
        title="Total de débitos"
        value={countDebtsSum()}
      />
      <ResumeItem
        Icon={BsCalendarX}
        title="Valor de débitos atrasados"
        value={countDebtsLate()}
      />
      <ResumeItem
        Icon={BsCalendarCheck}
        title="Valor de débitos em dia"
        value={countDebtsPeding()}
      />
    </Style.Container>
  );
};

export default Resume;
