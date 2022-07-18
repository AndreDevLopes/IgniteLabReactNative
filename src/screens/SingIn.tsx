import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';

export const SingIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { colors } = useTheme();

  const handleSingIn = () => {
    setName('André');
  };

  return (
    <VStack flex={1} alignItems="center" bg="gray.500" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={16}>
        Acesse sua conta {name}
      </Heading>
      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setEmail}
      />
      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setSenha}
      />
      <Button title="Entrar" w="full" onPress={() => handleSingIn()} />
    </VStack>
  );
};
