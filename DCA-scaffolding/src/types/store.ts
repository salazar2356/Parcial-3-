import { Product } from "./products";

/*OBSERVER*/
export type Observer = { render: () => void } & HTMLElement;

/*APP STATE*/

export type AppState = {
    [x: string]: any;
    products: Product[];
}

export enum SomeActions{
    "SAVE_PRODUCT" = "SAVE_PRODUCT",
    "GET_PRODUCT" = "GET_PRODUCT",

}

export interface SaveProductAction {
    action: SomeActions.SAVE_PRODUCT;
    payload: Product;
}

export interface GetProductAction {
    action: SomeActions.GET_PRODUCT;
    payload: Product [];
}

export type Actions = SaveProductAction | GetProductAction;
;