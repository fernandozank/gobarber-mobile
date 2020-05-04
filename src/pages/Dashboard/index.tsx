import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Button, ButtonText } from './styles';

interface AuthState {
  token: string;
  user: object;
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  // useEffect(() => {
  //   signOut();
  // }, [signOut]);

  return (
    <Container>
      <Button onPress={signOut}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
};

export default Dashboard;
