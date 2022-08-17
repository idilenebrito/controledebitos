/* eslint-disable prettier/prettier */
import React from 'react';
import { Debt } from '../../types/Debt';
import * as Style from './styles';
import { FaTrash } from 'react-icons/fa';

type Props = {
  item: Debt;
  onChange: (id: number, status: string) => void;
  removeItem: (id: number) => void;
};
const DebtItem = ({ item, onChange, removeItem }: Props) => {
  return (
    <Style.Tr>
      <Style.Td >{item.category}</Style.Td>
      <Style.Td alignCenter>{item.amount}</Style.Td>
      <Style.Td alignCenter>{item.dueDate}</Style.Td>
      <Style.Td alignCenter>
        <Style.Select
          name="Status"
          value={item.status}
          onChange={(event: { target: { value: string; }; }) =>
            onChange(item.id, event.target.value)
          }
        >
          <option value="" hidden>
            Selecione
          </option>
          <option value="Pendente">Pendente</option>
          <option value="Concluído">Pago</option>
        </Style.Select>
      </Style.Td>
      <Style.Td alignCenter>
        <FaTrash onClick={() => removeItem(item.id)} />
      </Style.Td>
    </Style.Tr>
  );
};

export default DebtItem;
