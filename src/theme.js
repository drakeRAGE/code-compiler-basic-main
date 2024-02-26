import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'white',
    useSystemColorMode: false,
  },
});
export default theme;
