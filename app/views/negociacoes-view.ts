import { Negociacoes } from './../models/negociacoes.js';
export class NegociacoesView {

    private elemento: HTMLLIElement;
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <theade>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </theade>
                <tbody>
                    ${model.lista().map(negociaco => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociaco.data)}</td>
                                <td>${negociaco.quantidade}</td>
                                <td>${negociaco.valor}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            <table>
        `;
    }

    update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model);
    }
}