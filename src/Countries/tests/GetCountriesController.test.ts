import { GetCountriesController } from "../Controllers/GetCountriesController";
import { GetCountries } from "../Services/GetCountries.ts";

const givenCountries = async (): Promise<Object[]> => {
  const controller = new GetCountriesController(new GetCountries());

  return await controller.exec();
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
  let firstCountry: Object;

  beforeAll(async () => {
    countries = await givenCountries();
    firstCountry = whenFirstCountry(countries);
  });

  it("Deve retornar um array com países", async () => {
    thenIsArrayAndNotEmpty(countries);
  });

  it("País deve possuir o atributo name", async () => {
    thenCountryHasNameAttribute(firstCountry);
  });

  it("País deve possuir o atributo region", async () => {
    thenCountryHasRegionAttribute(firstCountry);
  });
});
