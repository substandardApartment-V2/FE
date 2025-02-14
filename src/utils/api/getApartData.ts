import axios from "axios";

export default async function getApartData(url: string, query?: string) {
  try {
    const result = await axios(url);
    return result.data;
  } catch (error) {
    return error;
  }
}
