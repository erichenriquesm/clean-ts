import { CountriesAPIContract } from "./CountriesAPIContract";

export interface GetCountriesContract extends CountriesAPIContract {
    exec():  Promise<object>;
}