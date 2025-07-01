import { CountriesAPIContract } from "../Contracts/CountriesAPIContract";

export class CountriesAPI implements CountriesAPIContract {
    protected static apiUrl: string = 'https://restcountries.com/v3.1';
}