import { IGenericModel } from '../classes/generic.model';

export interface SearchResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: IGenericModel;
}