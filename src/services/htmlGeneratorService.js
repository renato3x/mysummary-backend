import ejs from 'ejs'

export default (data, templateSRC) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templateSRC, {...data}, (error, html) => {
      error ? reject(error) : resolve(html)
    })
  })
}
