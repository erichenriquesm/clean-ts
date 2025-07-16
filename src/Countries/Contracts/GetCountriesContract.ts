import { CountriesAPIContract } from "./CountriesAPIContract.ts";

export interface GetCountriesContract extends CountriesAPIContract {
    exec():  Promise<object[]>;
}