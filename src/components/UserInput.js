import React, {useState} from "react";
import ButtonComponent from "./General/Button";
import Autocomplete from "./General/Autocomplete";

/*****
 * How could we make the input easier to use? Make is a self contained function with its own state
 * function useInput({type ... }) { const [...] = useState(""); const input = <input ...> return [value, input]}
* */
const UserInput = () => {
    // the key with this type of setup is that we need a line & f(x) for each input
    const [inVal, setVal] = useState("");
    const [file, setFile] = useState(null);
    const [selectVal, setSelectVal] = useState("");
    const [text, setText] = useState([]);

    const submitValue = () => {
        const frmdetails = {
            'First Name' : inVal,
            'File' : file,
            'Phone' : text,
            'selectVal' : selectVal
        }
        console.log(frmdetails);
    }

    return (
        <div>
            <h2>Inputs</h2>
            <input type="text" placeholder="First Name" onChange={(e) => setVal(e.target.value)} />
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <div>
                <p></p>
                <select onChange={(e) => setSelectVal(e.target.value) }>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                </select>
            </div>
            <div>
                <Autocomplete setText={setText} text={text} />
            </div>
            <ButtonComponent onClickFunction={submitValue} label={"Submit"}/>
        </div>
    )
}

export default UserInput;