import { Product } from "../types/products";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";


export const saveproduct = async (products: Product): Promise <Actions> => {
        await firebase.saveProductInDB(products);
        return {
          action: SomeActions.SAVE_PRODUCT,
          payload: products,
         
  }
};

export const getProduct = async (): Promise <Actions> => {
  const products = await  firebase.getProductsFromDB();
  return {
    action: SomeActions.GET_PRODUCT,
    payload: products,
   
}
}

    
      
   