import { useState } from "react";

export default function useLocalState(localItem, initialValue) {
    const [loc, setState] = useState(JSON.parse(localStorage.getItem(localItem)) || initialValue);
    
    function setLoc(newItem) {
        localStorage.setItem(localItem, JSON.stringify(newItem));
        setState(newItem)
    }
    return [loc, setLoc]
}
