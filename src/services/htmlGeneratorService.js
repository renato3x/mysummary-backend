import { JSDOM } from 'jsdom'

export default async (data) => {
  const { title, textsArray } = data
  const baseHTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  
        * {
          font-family: 'Roboto', sans-serif;
        }
  
        body {
          margin: 0;
          padding: 0 30px;
        }
  
        body p {
          text-align: justify;
        }
  
        body h1 {
          margin: .4em 0;
        }
      </style>
    </head>
    <body>
    </body>
  </html>
  `
  const { document } = new JSDOM(baseHTML).window

  const h1 = document.createElement('h1')
  h1.innerHTML = title
  
  document.body.appendChild(h1)
  document.body.appendChild(document.createElement('hr'))

  textsArray.forEach(text => {
    const p = document.createElement('p')
    p.innerHTML = text
    document.body.appendChild(p)
  })

  return document.documentElement.outerHTML
}
