import htmlGeneratorService from "@services/htmlGeneratorService";
import { PdfContent } from "src/@types";

describe('HTML Generator Service', () => {
  it('Should return a string with an HTML that was generated from a title and content that was passed', () => {
    const content: PdfContent = {
      title: 'Lorem Ipsum',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh erat, vestibulum sit amet commodo ut, ullamcorper nec purus. Nullam elit ligula, laoreet sollicitudin aliquet sit amet, malesuada non ipsum. Maecenas tortor arcu, malesuada eu imperdiet quis, cursus faucibus nunc. In ac ornare lacus. Sed porttitor porta ultrices. Phasellus consequat metus vel lectus ullamcorper molestie. Donec vel nisi nunc. Sed ut eros facilisis felis tincidunt aliquam. Maecenas arcu diam, ullamcorper sit amet quam ut, feugiat blandit ipsum. Vivamus a commodo lectus. Nulla mi urna, faucibus ut purus at, tempus sodales sapien. In sollicitudin lobortis venenatis.',
        'Curabitur mollis mi nunc, quis mollis diam feugiat quis. Cras vitae metus ut est tincidunt ullamcorper nec nec eros. Fusce iaculis magna erat, sed ultrices nisl vulputate et. Proin ac egestas nisi. Integer vel sollicitudin purus. Morbi sit amet malesuada ipsum, a aliquam elit. Curabitur posuere blandit odio, quis rutrum erat maximus et. Donec nec luctus augue, vitae placerat orci. Nullam tincidunt nunc sit amet nulla vestibulum, eget aliquam augue convallis. In vulputate ut velit vel ornare. Morbi erat nulla, fringilla ut placerat vel, pharetra non erat. Mauris porta felis urna, quis dapibus diam sodales et.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex diam, volutpat at porttitor id, aliquet at purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur aliquam nulla sit amet justo auctor pellentesque. Donec ut odio in leo lobortis maximus at ut nisi. Vestibulum ac quam urna. Phasellus fringilla in nisl eu tristique. Mauris ex ipsum, sodales vitae euismod sed, vulputate sit amet ante.',
        'Phasellus lorem sem, dapibus vel placerat quis, tincidunt eget nulla. Vivamus lacinia mi quis libero tempor, in ultricies velit dignissim. Fusce cursus tincidunt erat, vel dictum lorem auctor sed. Aliquam eget quam eu purus rhoncus ultrices id sit amet lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean nunc dolor, condimentum ut quam ac, commodo ultricies tellus. Vivamus tempor erat a maximus iaculis. Suspendisse euismod enim mollis nisi tincidunt maximus. Donec eu massa est. Donec ultrices, ipsum at blandit laoreet, risus velit volutpat elit, nec cursus tellus sem placerat lectus. Fusce venenatis molestie velit, vel placerat purus feugiat eu.',
        'Curabitur tincidunt libero quis magna semper vestibulum. Mauris molestie lacus ex, eu tincidunt augue pharetra a. Aliquam sollicitudin eros tellus, nec commodo enim dapibus id. Nam imperdiet eget augue id commodo. Duis nec augue vitae enim ultricies gravida. Cras id libero quis velit euismod facilisis. Aliquam efficitur erat sit amet laoreet pharetra.'
      ]
    }
    
    const html = htmlGeneratorService(content)

    expect(html).toContain(content.title)
    
    content.paragraphs.forEach(paragraph => {
      expect(html).toContain(paragraph)
    })
  })
})
