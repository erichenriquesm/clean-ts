import { HelloWorld } from "../Services/HelloWorld.ts";

describe('Valida os comportamentos do serviço HelloWorld', () => {
    it("Deve printar um log escrito 'Hello, world!'", () => {
        // Arrange - Preparo
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        const service = new HelloWorld();

        // Act - Execução
        service.displayMessage();

        // Assert - Verificação
        expect(consoleSpy).toHaveBeenCalledWith('Hello, world!');
    });
});