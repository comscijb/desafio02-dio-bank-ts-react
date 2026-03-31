import { 
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
      </Box>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Card />
      </Box>
    </ChakraProvider>
  );
}

export default App;
