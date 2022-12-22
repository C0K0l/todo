import { useRef, useState } from 'react';
import { INote } from '../../App';
import s from './Note.module.scss'

interface INoteProps{
  note: INote;
  onDelete: (id:number) => void;
  onChangeStatus: (id: number, isComplited: boolean) => void;
  onChangeEdit: (id:number, name: string) => void;
}


const Note: React.FC<INoteProps> = ({onDelete, onChangeStatus,onChangeEdit,note}) => {

  const [isEditing,setEditing] = useState(false);
  const [text, setText] = useState(note.name)
  const editRef = useRef<HTMLInputElement>(null);
  const onClickEdit = (id:number, name: string) => {
    onChangeEdit(id, name);
    setEditing(!isEditing)
  }
  const onChangeInput = () => {
    if(editRef.current) {
      setText(editRef.current.value)
    }
  }


  return (
    <div className={s.wrapper}>
      {!isEditing ? <h3 className={s.text}>{note.name}</h3> : <input ref ={editRef} onChange= {onChangeInput} value={text} className={s.input} type='text'/>}
      <div onClick={()  => onChangeStatus(note.id,note.isComplited)} className={s.chekbox}>{note.isComplited ? 'done' : 'in procces'}</div>
      <div className={s.buttons}>
        <button onClick={() => onClickEdit(note.id, text )} className={s.edit_button}>
          {!isEditing ? 'Edit' : 'Confirm'}
        </button>
        <button onClick={() =>  onDelete(note.id)} className={s.delete_button}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Note