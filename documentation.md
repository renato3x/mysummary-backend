# My Summary - Documentation 📝

This documentation has all the routes that exist in this application, in addition to having all the necessary parameters for each route.

# Notices 📰

To consume the API in the development environment, first of all, you need an account on the [smmry.com](https://smmry.com) website so that you can create your API key for consuming the API on your local machine.

Having your API KEY in hand, create an .env file with the variable SMMRY_API_KEY with the value of your generated API KEY. Also, add a PORT variable with the port number that the application should run and the APPLICATION_URL variable with the value of the URL that the application can access, for example, **http://localhost:3000** (do not put the slash at the end of the URL).

By following the steps given above, you will be able to test this API on your local machine. However, if you want to use it on the web, just access the link [api-mysummary.herokuapp.com](https://api-mysummary.herokuapp.com).

If you notice any problems with this documentation, please report them as soon as possible to correct them.

# Routes 🛣

From this part of the documentation, the information of each route of this application will be passed in detail.

### GET /

##### Params
<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>Type</b>
      </td>
      <td>
        <b>Example</b>
      </td>
      <td>
        <b>Required</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td colspan="4" style="text-align: center">
        <b>No Params</b>
      </td>
    </tr>
  </tbody>
</table>

##### Body Params
<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>Type</b>
      </td>
      <td>
        <b>Example</b>
      </td>
      <td>
        <b>Required</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td colspan="4" style="text-align: center">
        <b>No Body Params</b>
      </td>
    </tr>
  </tbody>
</table>

##### Responses
<table>
  <thead>
    <tr>
      <td>
        <b>Status Code</b>
      </td>
      <td>
        <b>Return Type</b>
      </td>
      <td>
        <b>Return</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style="text-align: center">
        200 (Success)
      </td>
      <td style="text-align: center">
        JSON
      </td>
      <td style="text-align: center">
        Application creator message
      </td>
    </tr>
  </tbody>
</table>

##### Request Example

###### Javascript

```javascript
const URL = 'https://api-mysummary.herokuapp.com'

fetch(URL).then(response => {
  response.json().then(data => {
    console.log(data)

    /**
    * @returns
    * { message: 'This is an automatic PDF generation API created by Renato Pereira. Visit my Github: https://github.com/renato3x/' }
    */
  })
})

```

### GET /pdfs

##### Params
<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>Type</b>
      </td>
      <td>
        <b>Example</b>
      </td>
      <td>
        <b>Required</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        pdfName
      </td>
      <td>
        String
      </td>
      <td>
        1629767554357-my_pdf_file.pdf
      </td>
      <td>
        Yes
      </td>
    </tr>
  </tbody>
</table>

##### Body Params
<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>Type</b>
      </td>
      <td>
        <b>Example</b>
      </td>
      <td>
        <b>Required</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td colspan="4" style="text-align: center">
        <b>No Body Params</b>
      </td>
    </tr>
  </tbody>
</table>

##### Responses
<table>
  <thead>
    <tr>
      <td>
        <b>Status Code</b>
      </td>
      <td>
        <b>Return Type</b>
      </td>
      <td>
        <b>Return</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style="text-align: center">
        200 (Success)
      </td>
      <td style="text-align: center">
        PDF File
      </td>
      <td style="text-align: center">
        PDF Data
      </td>
    </tr>
    <tr>
      <td style="text-align: center">
        404 (Not Found)
      </td>
      <td style="text-align: center">
        HTML File
      </td>
      <td style="text-align: center">
        Cannot GET /pdfs/anything_you_wrote_here
      </td>
    </tr>
  </tbody>
</table>

##### Request Example

###### Javascript

```javascript
const URL = 'https://api-mysummary.herokuapp.com/pdfs/1629767554357-my_pdf_file.pdf'

fetch(URL).then(response => {
  response.json().then(data => {
    console.log(data)

    /**
    * @returns
    * The HTML File you requested or
    * Cannot GET /pdfs/1629767554357-my_pdf_file.pdf
    */
  })
})

```

### POST /pdf

##### Params
<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>Type</b>
      </td>
      <td>
        <b>Example</b>
      </td>
      <td>
        <b>Required</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td colspan="4" style="text-align: center">
        <b>No Params</b>
      </td>
    </tr>
  </tbody>
</table>

##### Body Params
<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>Type</b>
      </td>
      <td>
        <b>Example</b>
      </td>
      <td>
        <b>Required</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        pdfTitle
      </td>
      <td>
        String
      </td>
      <td>
        Title Of My PDF
      </td>
      <td>
        Yes
      </td>
    </tr>
    <tr>
      <td>
        url
      </td>
      <td>
        String
      </td>
      <td>
        https://website-for-create-summary.com
      </td>
      <td>
        Yes
      </td>
    </tr>
  </tbody>
</table>

##### Responses
<table>
  <thead>
    <tr>
      <td>
        <b>Status Code</b>
      </td>
      <td>
        <b>Return Type</b>
      </td>
      <td>
        <b>Return</b>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style="text-align: center">
        201 (Created)
      </td>
      <td style="text-align: center">
        JSON
      </td>
      <td style="text-align: center">
        URL to access the generated PDF
      </td>
    </tr>
    <tr>
      <td style="text-align: center">
        400 (Bad Request)
      </td>
      <td style="text-align: center">
        JSON
      </td>
      <td style="text-align: center">
        Message: Invalid page to create a summary
      </td>
    </tr>
    <tr>
      <td style="text-align: center">
        500 (Internal Server Error)
      </td>
      <td style="text-align: center">
        JSON
      </td>
      <td style="text-align: center">
        Message: Error generating summary
      </td>
    </tr>
    <tr>
      <td style="text-align: center">
        500 (Internal Server Error)
      </td>
      <td style="text-align: center">
        JSON
      </td>
      <td style="text-align: center">
        Message: Error generating pdf file
      </td>
    </tr>
    <tr>
      <td style="text-align: center">
        429 (Too Many Requests)
      </td>
      <td style="text-align: center">
        JSON
      </td>
      <td style="text-align: center">
        Message: Too many requests. Please, wait a little bit (try again after 1 minute)
      </td>
    </tr>
  </tbody>
</table>

##### Request Example

###### Javascript

```javascript
const URL = 'https://api-mysummary.herokuapp.com/pdf'

fetch(URL, {
  method: 'POST',
  body: {
    pdfTitle: 'My PDF',
    url: 'https://my-url.com'
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(response => {
  response.json().then(data => {
    console.log(data)
  })
})

```

# WebSocket 🌐

Using Socket.io, this API can emit real-time events for interaction mainly in Frontend.

To use this feature, use the Socket.io client. Look for the Socket.io client package for your application (React, Vue, Angular or even without these frameworks) and install it in your application. Once that's done, connect Socket.io to the API using the web URL ([https://api-mysummary.herokuapp.com](https://api-mysummary.herokuapp.com)) or your machine's URL local.

Having connected socket.io to the API, just listen for the emitted events. Events sent to the API consumer are listed below:

### requestQuantity

##### Returns
<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>Type</b>
      </td>
      <td>
        <b>Description</b>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        requestQuantity
      </td>
      <td>
        Number
      </td>
      <td>
        Returns the number of requests made in the day. A number ranging from 0 to 100
      </td>
    </tr>
    <tr>
      <td>
        canRequest
      </td>
      <td>
        Boolean
      </td>
      <td>
        Returns if it is still possible to generate files on the same day
      </td>
    </tr>
  </tbody>
</table>

##### Use Example

```javascript
io.on('requestQuantity', (data) => {
  console.log(`Quantity of archives made today: ${data.requestQuantity}`)
  console.log(`Can files still be made today? ${data.canRequest ? 'Yes!' : 'No!'}`)
})
```
