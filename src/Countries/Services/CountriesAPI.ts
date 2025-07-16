import { CountriesAPIContract } from "../Contracts/CountriesAPIContract.ts";

export class CountriesAPI implements CountriesAPIContract {
    protected static apiUrl: string = 'https://restcountries.com/v3.1';
}