import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Read=()=>{
    

    const [data,setData]=useState([]);
    const [tabledark,setTableDark]=useState("");
    function getData(){
        axios.get("https://6638e2d44253a866a24f8d9d.mockapi.io/crud-youtube")
        .then((res)=>{
            console.log(res.data);
            setData(res.data); //here res.data is different from useState data
        });
    }

    function handleDelete(id){
        axios.delete(`https://6638e2d44253a866a24f8d9d.mockapi.io/crud-youtube/${id}`)
        .then(()=>{
            getData();
        })
    }

    const setLocalStorage=(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    }


    useEffect(()=>{
        getData();
    },[])
    

    return(
        <>
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox"
            onClick={()=>{
                if(tabledark==='table-dark')
                setTableDark("");
                else
                    setTableDark("table-dark");
            }}
        />

        </div>
            <div className="d-flex justify-content-between m-2">
                <h2>Read</h2>
                <Link to="/">
                    <button className="btn btn-secondary">Create Data</button>
                </Link> </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                { data.map((value)=>{
                    return(
                        <>
                    <tbody>
                        <tr>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>
                            <Link to="/update">
                                <button className="btn-success"
                                onClick={()=>
                                setLocalStorage(value.id,value.name,value.email)
                                }>Edit</button>
                              </Link>
                            </td>
                            <td>
                                <button className="btn-danger" onClick={()=>handleDelete(value.id)}>Delete</button>
                            </td>
                        </tr>

                    </tbody></>
                    )
                })
                
                }
            </table>
        </>
    )
}

export default Read;