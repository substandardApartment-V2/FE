import axios from "axios";

export default async function getApartData(url: string) {
  try {
    const result = await axios(url);
    return result.data;
  } catch (error) {
    return error;
  }
}
