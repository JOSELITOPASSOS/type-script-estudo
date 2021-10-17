import { View } from "./view.js";

export class MensagemView extends View<string> {

    // private elemento: HTMLLIElement;
    // constructor(seletor: string){
    //     this.elemento = document.querySelector(seletor);
    // }

    template(model: string): string {
        return `
            <p class="alert-info">${model}</p>
        `;
    }

    // update(model: string): void {
        // const templete = this.templete(model);
        // this.elemento.innerHTML = templete;
    // }
}