import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    let userName: string = 'John Doe'

    it('Deve exibir um alert com boas vindas', () => {
        login(userName)
        expect(mockAlert).toHaveBeenCalledWith(`Olá ${userName}!\nSeja bem-vindo(a) ao DIO Bank!`)
    })
})