import {useState} from 'react'
import Tecla from './Tecla'

export default function Cofre(props){
    const estadoInicial = props.senha.split("").map((valor,indice)=>({id:indice+1, valorDigitado:0, valorCorreto:Number(valor)}))

    const [digitos, setDigitos] = useState(estadoInicial)
    
    function atualizaDigito(valor, id){
        let novosDigitos;
        novosDigitos = digitos.map(digito=>{
            if(digito.id==id) {
                let novoDigito = {...digito}
                novoDigito.valorDigitado=valor;
                return novoDigito
            } else {
                return digito;
            }
        })
        setDigitos(novosDigitos)
    }

    function abrir(){
        
    }

    return <span style={{color:"brown", fontSize:"40px"}}>
        {digitos.map(digito=><Tecla onChange={(valor)=>atualizaDigito(valor, digito.id)}/>)}
            <button onClick={abrir}>Abrir</button>
    </span>
}
