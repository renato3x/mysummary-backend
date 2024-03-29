export type Request = {
  quantity: number
  day: number
  month: number
  year: number
}

export interface Summary {
  sm_api_character_count: string,
  sm_api_content_reduced: string,
  sm_api_title: string,
  sm_api_content: string,
}

export interface PdfContent {
  title: string
  paragraphs: string[]
}

export interface PdfCreationRequestBody {
  title: string
  url: string
}

export interface PdfCreationApiResponse {
  pdfUrl: string
}
