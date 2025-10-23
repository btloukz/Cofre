import {useState} from 'react'
import Tecla from './Tecla'

export default function Cofre(props){
    const estadoSenha = props.senha.split("").map((valor, indice)=>({position: indice+1, valorDigitado:0, valorCorreto:Number(valor)}))

    const [senha, setSenha] = useState(estadoSenha)
    const [texto, setTexto] = useState("")
    const [tentativas, setTentativas] = useState(3)
    const [final, setFinal] = useState("")

    function novoValorDigitado(valor, posicao){
        let novoArraySenha = senha.map(digito=>{
            if(digito.position==posicao){
                let novoObjetoDigito = {...digito}
                novoObjetoDigito.valorDigitado=valor
                return novoObjetoDigito
            } else {
                return digito
            }
        })
        setSenha(novoArraySenha)
    }

    function clicar(){
        let certo = senha.filter((digito)=>digito.valorDigitado!==digito.valorCorreto)
        if(certo){
            setTexto("Errado!")
            setTentativas(tentativas-1)
        } else {
            setTexto("Cofre aberto!")
            setFinal("Valor no Cofre: R$350,00")
        }
    }


    return <span style={{fontSize:"30px"}}>
        {senha.map(novaTecla=><Tecla onChange={(valor)=>novoValorDigitado(valor, novaTecla.position)}/>)}
        <button disabled={tentativas==0} onClick={clicar}>Abrir</button>
        <br/>
        {texto}
        <br/>
        {final}
        <br/>
        <h3>Tentativas: {tentativas}</h3>
        {tentativas == 0 && <h4>Acabaram suas chances...</h4>}
    </span>
}
