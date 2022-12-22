import React, { useRef } from "react"
import s from './Input.module.scss'

interface IInputProps {
  onChange:  (name : string)  =>  void
}


const Input = ({onChange}: IInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickAdd = () => {
    if(inputRef.current && inputRef.current.value !== ''){
    let name: string = inputRef.current.value;
    onChange(name);
    inputRef.current.value = ''
    }
    
  }
  return (
    <div className={s.wrapper}>
      <input ref={inputRef}   className={s.input} type="text" placeholder="write something" />
      <button onClick={ onClickAdd} className={s.button}>Add</button>
    </div>
  )
}

export default Input