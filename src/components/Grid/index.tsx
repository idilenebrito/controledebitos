/* eslint-disable prettier/prettier */
import DebtItem from '../DebtItem/index';
import * as Style from './styles';
import { Debt } from '../../types/Debt';
import { Key } from 'react';

type Props = {
  item: Debt[];
  onChange: (id: number, status: string) => void;
  removeItem: (id: number) => void;
};

const Grid = ({ item, onChange, removeItem }: Props) => {
  return (
    <Style.Table>
      <Style.Thead>
        <Style.Tr>
          <Style.Th width={40} alignCenter>
            Descrição
          </Style.Th>
          <Style.Th width={15} alignCenter>
            Valor
          </Style.Th>
          <Style.Th width={20} alignCenter>
            Data de Vencimento
          </Style.Th>
          <Style.Th width={20} alignCenter>
            Status
          </Style.Th>
          <Style.Th width={10} alignCenter>
            Apagar
          </Style.Th>
        </Style.Tr>
      </Style.Thead>
      <Style.Tbody>
        {item?.map((item: Debt, index: Key | null | undefined) => (
          <DebtItem
            key={index}
            item={item}
            onChange={onChange}
            removeItem={removeItem}
          />
        ))}
      </Style.Tbody>
    </Style.Table>
  );
};

export default Grid;
