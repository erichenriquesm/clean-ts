import { GetCountriesController } from "../Controllers/GetCountriesController";
import { GetCountries } from "../Services/GetCountries.ts";

describe('Valida retorno para se obter os países', () => {
    it("Deve retornar um array com países", async () => {
        // Arrange - Preparo
        const controller = new GetCountriesController(new GetCountries());

        // Act - Execução
        const result:object[] = await controller.exec();
        const firtCountry: object = result[0];

        // Assert - Verificação
        expect(typeof result).toBe('object');
        expect(firtCountry).not.toBeNull();
        expect(firtCountry.hasOwnProperty('name')).toBeTruthy();
        expect(firtCountry.hasOwnProperty('region')).toBeTruthy();
    });
});