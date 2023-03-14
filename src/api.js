import axios from 'axios';
import { serverUrl } from './const';

export async function getProducts() {
  try {
    const responce = await axios.get(`${serverUrl}/products`);

    if (responce.status === 200) {
      return responce.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  try {
    const responce = await axios.get(`${serverUrl}/products/${id}`);

    if (responce.status === 200) {
      return responce.data;
    }
  } catch (error) {
    console.log(error);
  }
}
