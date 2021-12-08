import { Container } from "./styled"

import { useState, useEffect} from 'react';

import Api from '../../service/api'
const api = new Api();
 

export default function Lista() {

    
return (
    <Container>
        <div className="tudo">
            <div className="cabecalho">
                <div className="cima">Lista Negra</div>
            </div>

            <div className="nome">
                <div className="base_nome"> Nome: </div>
                <div className="nome_nome">
                   <input id="base_nome" name="base_nome" required="required" value={nome} type="text" onChange={e => setNome(e.target.value)} />
                </div>

            </div>

               <div class="button-create"> <button onClick={inserirPessoas}> ok </button> </div>
            
            <div className="lista">
                <div className="lista_lista"> Lista </div>
            </div>

            <table className="tabela">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>
                    </thead>  

                    <tbody>   
                        {pessoas.map((x) =>
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.id_nome}</td>
                            </tr>  
                        )}
                    </tbody>                                      
            </table>
        </div>
    </Container>
 )
}