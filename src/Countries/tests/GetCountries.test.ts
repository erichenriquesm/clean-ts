import { GetCountries } from "../Services/GetCountries.ts";

describe("Valida retorno para se obter os países", () => {
  it("Deve retornar um array com países", async () => {
    // Arrange - Preparo
    const service = new GetCountries();

    // Act - Execução
    const result: object[] = await service.exec();
    const firtCountry: object = result[0];

    // Assert - Verificação
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(firtCountry).not.toBeNull();
    expect(firtCountry).toEqual(
      expect.objectContaining({
        name: expect.any(Object),
        region: expect.any(String),
      })
    );
  });
});
