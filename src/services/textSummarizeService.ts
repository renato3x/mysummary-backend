import axios from "axios";
import { Summary } from "src/@types";

export default async function textSummarizeService(url: string, length = 7) {
  try {
    const { SMMRY_API_KEY } = process.env

    const { data } = await axios.get<Summary>(`https://api.smmry.com/?SM_API_KEY=${SMMRY_API_KEY}&SM_LENGTH=${length}&SM_WITH_BREAK&SM_URL=${url}`)

    return data
  } catch (error: any) {
    const possibleErrors = ['TEXT IS TOO SHORT', 'TEXT IS TOO SHORT 2', 'THE PAGE IS IN AN UNRECOGNISABLE FORMAT', 'THE PAGE COULD NOT BE FOUND']
    const errorMessage = error.response.data.sm_api_message 

    if (possibleErrors.indexOf(errorMessage) != -1) {
      throw {status: 400, message: 'Invalid page to create a summary' }
    }

    throw {status: 500, message: 'Error at generate summary'}
  }
}
