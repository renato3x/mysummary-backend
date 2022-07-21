import textSummarizeService from "@services/textSummarizeService";
import mockAxios from 'jest-mock-axios'

afterEach(() => {
  mockAxios.reset()
})

describe('textSummarizeService', () => {
  
  it('Should return an object with the summary data', async () => {
    const websiteUrl = 'https://pt.wikipedia.org/wiki/REST'
    
    const data = await textSummarizeService(websiteUrl)
    
    expect(data).not.toBeUndefined()
  })
  
  it('Should return status code 400 if the website is not valid to generate the summary', async () => {
    const websiteUrl = 'http://google.com'

    await expect(textSummarizeService(websiteUrl)).rejects.toEqual({
      status: 400,
      message: 'Invalid page to create a summary'
    })
    
  }, 20000)
})
