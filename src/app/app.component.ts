import { Component } from '@angular/core';

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "",
});
const openai = new OpenAIApi(configuration);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerando imagem com IA';
  url_image = "";
  textToSend = ""
  showImage = false;

  async generateImage() {
    console.log(this.textToSend);
  
    this.showImage = true;
    this.url_image = "./assets/loading.gif"

    const imageParameters = {
      prompt: this.textToSend,
      n: 1,
      size: "256x256",
    }
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url

    this.url_image = urlData;

  }
}
