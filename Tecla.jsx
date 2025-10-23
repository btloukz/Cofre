import {useState} from 'react'
import adicionar from './assets/adicionar.png'
import remover from './assets/remover.png'
import proibido from './assets/proibido.png'

export default function Tecla(props){
    const [valor, setValor] = useState(0);

    function aumentar(){
        let novoValor=valor;
        novoValor+=1
        setValor(novoValor)
        props.onChange(novoValor)
    }

    function diminuir(){
        let novoValor=valor;
        novoValor-=1
        setValor(novoValor)
        props.onChange(novoValor)
    }
    
    return <>
       {valor>0?<img onClick={diminuir} src={remover}/>:<img src={proibido}/>}
       {valor} 
       {valor<9?<img onClick={aumentar} src={adicionar}/>:<img src={proibido}/>}
    </>
}
