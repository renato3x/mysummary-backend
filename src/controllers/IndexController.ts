import { Request, Response } from "express";

export default class IndexController {
  static async index(request: Request, response: Response) {
    return response.status(200).json({
      message: 'This is an automatic PDF generation API created by Renato Pereira. Visit my Github: https://github.com/renato3x/'
    })
  }
}
