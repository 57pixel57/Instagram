class Card extends HTMLElement{


  static get observedAttributes() {
    return ["name", "description", "comics", "series", "thumbnail"];
  }

    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }
    
    attributeChangedCallback(propName, oldValue, newValue) {

          this[propName] = newValue;
          this.render();

      }

    connectedCallback() {
        this.render();
      }

      render(){
        this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/card/card.css">
          <section>
          <h1>${this.name}</h1>
          <p>${this.description}</p>
          <p> ${this.comics} </p>
          <p> ${this.series} </p>
          <img src="${this.thumbnail}"> 
          </section>
      `;
      }
      
}

customElements.define("my-card", Card);

export default Card;
