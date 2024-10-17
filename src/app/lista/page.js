'use client';
import { useState, useEffect } from 'react'

export default function Lista() {
  const [lista, setLista] = useState([])
  let [itemName, setItemName] = useState("")

  const onInputChange = (ev) => {
    setItemName(ev.target.value);
  }

  const handleClick = (ev) => {
    lista.push(itemName)
    setLista([...lista])
  }

  useEffect(() => {
    console.log('useEffect vazio')
  }, [])

  useEffect(() => {
    console.log('itemName', itemName)
  }, [itemName])

  return (
    <>
      <h1>Lista</h1>

      <div>
        <input name='item' onChange={onInputChange}/>
        <button onClick={handleClick}>Adicionar</button>
      </div>

      <div>
        <h3>Itens</h3>
        <p>Último item: {itemName}</p>

        <ul>
          {lista.map((item) => {
            return (<li>{item}</li>)
          })}
        </ul>
      </div>
    </>
  );
}
