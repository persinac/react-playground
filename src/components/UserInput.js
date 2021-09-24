import React, {useEffect, useState} from "react";
import ButtonComponent from "./General/Button";
import Autocomplete from "./General/Autocomplete";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

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
    const [data, setAPIData] = useState([]);

    const submitValue = () => {
        const frmdetails = {
            'First Name' : inVal,
            'File' : file,
            'Phone' : text,
            'selectVal' : selectVal
        }
        console.log(frmdetails);
    }


    const getSomeData = () => {
        fetch('https://jsonplaceholder.typicode.com/users', { method: "GET"})
            .then((apiData) => {
                apiData.json().then((moreData) => {
                    let hintArray = [];
                    moreData.map((a) => hintArray.push(a.name))
                    setAPIData(hintArray)
                })

            });
    }

    // useEffect(() => {
    //     getSomeData()
    // });

    const buildProductHeaderTRs = () => {
        if (!!data && data.length > 0) {
            console.log("WE GOT DATA");
            console.log(data);
            return data.map((ts, i) => {
                console.log(ts)
                /* this could be cleaner, but will do for now */
                // console.log(ts.seq[0]);
                return (
                    <tr key={i}>
                        <td>{ts}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            });
        }
    }

    return (
        <div>
            <div className="d-flex flex-row justify-content-center">
                <h2>Inputs</h2>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className={`col-md-2 mb-3`}>
                    <input type="text" placeholder="File Name" onChange={(e) => setVal(e.target.value)} />
                </div>
                    <div className={`col-md-8 mb-3`}>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className={`col-md-4 mb-3`}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1" onSelect={(e) => setSelectVal(e)}>Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onSelect={(e) => setSelectVal(e)}>Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" onSelect={(e) => setSelectVal(e)}>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-right">
                <div className={`col-md-4 mb-3`}>
                    <Autocomplete setText={setText} text={text} />
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className={`col-md-4 mb-3`}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {buildProductHeaderTRs()}
                    </tbody>
                </Table>
            </div>
            </div>
            <ButtonComponent onClickFunction={getSomeData} label={"Get Data"}/>
            <ButtonComponent onClickFunction={submitValue} label={"Submit"}/>
        </div>
    )
}



export default UserInput;