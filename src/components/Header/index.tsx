import { useContext, useEffect, useState } from 'react';
import { DebtContext } from '../../contexts/debtsContext';
import * as Style from './styles';
import Alert from '../Alert/Index';

const Header = () => {
  const { syncApi } = useContext(DebtContext);
  // const [isSync, setIsSync] = useState({
  //   bool: false,
  // });
  const [isSync, setIsSync] = useState(false);

  const handleClick = () => {
    syncApi();
    // if (isSync.bool === false) {
    //   setIsSync({ ...isSync, bool: true });
    // }
    setIsSync(true);
  };

  console.log('clicou: ', isSync);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Controle Financeiro</Style.Title>
        <Style.Button>
          <button onClick={() => handleClick()}>Sincronizar</button>
          <Alert message=" Sincronizado com sucesso!" isOpen={isSync} />
        </Style.Button>
      </Style.Header>
    </Style.Container>
  );
};

export default Header;
