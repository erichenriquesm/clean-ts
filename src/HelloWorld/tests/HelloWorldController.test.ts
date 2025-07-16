import { DisplayMessageController } from "../Controllers/DisplayMessageController.ts";
import { HelloWorld } from "../Services/HelloWorld.ts";

describe('Valida os comportamentos do controller HelloWorld', () => {
    it("Deve printar um log escrito 'Hello, world!'", () => {
        // Arrange - Preparo
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        const controller = new DisplayMessageController(new HelloWorld());

        // Act - Execução
        controller.exec();

        // Assert - Verificação
        expect(consoleSpy).toHaveBeenCalledWith('Hello, world!');
    });
});