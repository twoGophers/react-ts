import React, { FC, useRef, useState } from 'react'

export const EventsExample: FC = () => {

const [ value, setValue ] = useState<string>('');
const [isDrag, setIsDrag] = useState<Boolean>(false);
const inputRef = useRef<HTMLInputElement>(null);

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
};

const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
    
};

const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(); 
};
const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false); 
    console.log("Drop"); 
};
const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false); 
};
const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
};

  return (
    <div>
        <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый'/>
        <input ref={inputRef} type="text" placeholder='Неуправляемый'/>
        <button onClick={clickHandler}>click</button>
        <div onDrag={dragHandler} draggable style={{ width: '200px', height: '200px', background: 'red' }}></div>
        <div 
            style={{ width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop: '20px' }}
            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler}
            ></div>
    </div>
  )
}
