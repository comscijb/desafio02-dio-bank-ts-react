import { Box, Center, Input } from "@chakra-ui/react"
import { Button } from "../Button/Button"
import { login } from "../../services/login"
import './Card.css'


export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='10px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1 className="card-h1">Digite suas credenciais para entrar</h1>
          </Center>
          <Input placeholder="email" margin='5px'/>
          <Input placeholder="password" margin='5px' type="password"/>
          <Center>
            <Button onClick={() => login('John Doe')} content='Entrar'/>
          </Center>
        </Box>
      </Box>
  )
}