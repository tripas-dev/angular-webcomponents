import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('wc-mood')
export class WebComponentsMood extends LitElement {
  @property({type: String}) mood;

  static get styles() {
    return css`
      .mood {
        color: #1976d2;
      }
    `;
  }

  render() {
    return html`
      <h1>Web Components are <span class="mood">${this.mood}</span>!</h1>
    `;
  }

}
