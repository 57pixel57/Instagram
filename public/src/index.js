import * as components from "./components/index.js"
import data from "./data.js"

class AppContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.pjs = [];
      var i =0;
      while(i<data.length){
        this.pjs.push(data[i]);
        i++;
      }
    }
    
    connectedCallback(){
      this.render();
    }
  
    render() {
       this.pjs.forEach((pj) => {
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="./src/component/card/card.css" type="text/html">
        <my-card name= "${pj.name}" description= "${pj.description}" comics= "${pj.comics}" series= "${pj.series}" thumbnail= "${pj.thumbnail}" ></my-card>
        `
        console.log(pj.comics);
        
        });
    }
  }
  
  customElements.define("app-cont", AppContainer);