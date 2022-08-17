/* eslint-disable prettier/prettier */
import React from 'react';
import * as Style from './style';

type Props = {
  title: string;
  Icon: any;
  value: number;
};
const ResumeItem = ({ title, Icon, value }: Props) => {
  return (
    <Style.Container>
      <Style.Header>
        <Style.HeaderTitle>{title}</Style.HeaderTitle>
        <Icon />
      </Style.Header>
      <Style.Total>{value}</Style.Total>
    </Style.Container>
  );
};

export default ResumeItem;
