import {useState} from 'react'

export default function Tecla(props){
    const [valor, setValor] = useState(0)

    function aumentar(){
        let novoValor=valor
        novoValor+=1
        if(novoValor>9)
            novoValor = 0
        setValor(novoValor)
        props.onChange(novoValor) 
    }

    function diminuir(){
        let novoValor=valor
        novoValor-=1
        if(novoValor<0)
            novoValor = 9
        setValor(novoValor)
        props.onChange(novoValor)
    }

    return <>
        <button onClick={diminuir}>-</button>
        {valor}
        <button onClick={aumentar}>+</button>
    </>
}
