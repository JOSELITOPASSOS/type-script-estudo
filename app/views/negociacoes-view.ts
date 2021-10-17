import { Negociacoes } from './../models/negociacoes.js';
import { View } from './view.js';
export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
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
                                <td>${this.formatar(negociaco.data)}</td>
                                <td>${negociaco.quantidade}</td>
                                <td>${negociaco.valor}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            <table>
        `;
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data);
    }

}