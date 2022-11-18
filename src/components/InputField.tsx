import { useRef } from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    //useRef is like using document.getElementById or byClassname
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form 
            className="input" 
            onSubmit={(e) =>{
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input 
                ref={inputRef}
                type="input" 
                placeholder="Enter a task" className="input-box" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input-submit" type="submit">Go</button>
        </form>
    )
}

export default InputField;