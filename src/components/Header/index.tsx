import { useContext, useState } from 'react';
import { DebtContext } from '../../contexts/debtsContext';
import * as Style from './styles';
import Alert from '../customSnackbar/Index';

const Header = () => {
  const { syncApi } = useContext(DebtContext);
  const [isSync, setIsSync] = useState(false);

  const handleClose = () => {
    setIsSync(false);
  };

  const handleClick = () => {
    syncApi();
    setIsSync(true);
  };

  console.log('clicou: ', isSync);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Controle Financeiro</Style.Title>
        <Style.Button>
          <button onClick={() => handleClick()}>Sincronizar</button>
          <Alert
            message=" Sincronizado com sucesso!"
            isOpen={isSync}
            handleClose={handleClose}
          />
        </Style.Button>
      </Style.Header>
    </Style.Container>
  );
};

export default Header;
