import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Note from './components/Note/Note';

export interface INote {
  name: string;
  id: number;
  isComplited: boolean;
}

const App = () => {
  const [notes, setNote] = useState<INote[]>([]);

  const onChange = (name: string) => {
    setNote((notes) => [...notes, { name: name, id: notes.length + 1, isComplited: false }]);
  };

  const onDelete = (id: number) => {
    console.log(notes, 'before');
    setNote(notes.filter((note) => note.id !== id));
  };

  const onEdit = (id:number, name: string) => {
    setNote((notes) => 
      notes.map((note) => {
        if(note.id === id){
          return {...note, name: name }
        }
        return note
      })
    )
  }

  const changeStatus = ( id: number, isComplited: boolean) => {
    setNote((notes) =>
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, isComplited: !isComplited };
        }
        return note;
      }),
    );
  };

  return (
    <div className="App">
      <Input onChange={(name: string) => onChange(name)} />
      <div className="notes">
        {notes.map((note) => (
          <Note
            onChangeStatus={( id: number, isComplited: boolean) =>
              changeStatus( id, isComplited)
            }
            onChangeEdit = {(id:number, name: string) => onEdit(id, name)}
            onDelete={(id: number) => onDelete(id)}
            note = {note}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
