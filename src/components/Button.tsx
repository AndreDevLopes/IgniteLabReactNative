import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
};

export const Button = ({ title, ...rest }: Props) => {
  return (
    <NativeBaseButton
      {...rest}
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: 'green.500',
      }}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </NativeBaseButton>
  );
};
