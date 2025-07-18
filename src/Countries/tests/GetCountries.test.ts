import { GetCountries } from "../Services/GetCountries.ts";

const givenCountries = async (): Promise<Object[]> => {
  const service = new GetCountries();

  return await service.exec();
};

const whenFirstCountry = (countries: Object[]): Object => {
  return countries[0];
};

const thenIsArrayAndNotEmpty = (countries: Object[]): void => {
  expect(Array.isArray(countries)).toBe(true);
  expect(countries.length).toBeGreaterThan(0);
};

const thenCountryHasNameAttribute = (country: Object): void => {
  expect(country).toEqual(
    expect.objectContaining({
      name: expect.any(Object),
    })
  );
};

const thenCountryHasRegionAttribute = (country: Object): void => {
  expect(country).toEqual(
    expect.objectContaining({
      region: expect.any(String),
    })
  );
};

describe("Valida retorno para se obter os países", () => {
  let countries: Object[];

  beforeAll(async () => {
    countries = await givenCountries();
  });

  it("Deve retornar um array com países", async () => {
    thenIsArrayAndNotEmpty(countries);
  });

  it("País deve possuir o atributo name", async () => {
    const firstCountry = whenFirstCountry(countries);
    thenCountryHasNameAttribute(firstCountry);
  });

  it("País deve possuir o atributo region", async () => {
    const firstCountry = whenFirstCountry(countries);
    thenCountryHasRegionAttribute(firstCountry);
  });
});
