import React, {useState , useEffect} from "react" ; 
import axios from 'axios' ; 
import {Button, Container, Table} from 'react-bootstrap'



function ListUser() {
    const [users ,setusers ] = useState([]) ; 
    const [SingleUser, SetSingleUser] = useState([]); 





    useEffect (function(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response => setusers(Response.data)) 
        .then (error => console.log(error));
    }, []);
    const onddlchange = (e) => {
       // alert(e.target.value);
    axios.get('https://jsonplaceholder.typicode.com/users/' + e.target.value)
        .then(Response => SetSingleUser(Response.data)) 
        .then (error => console.log(error));
    }; 

    return(
        <div>
        <select className="form-control col-ml-3" onChange={onddlchange}>
            
                <option value = "0" >--Select User--</option>
                {users.map((user)=>(
                <option 
                key= {user.id} 
                value={user.id}>{user.name}</option>
                ))}
        </select>
        <br/>
        <br/>
        <Table striped brodered hover>
            <thead>
                <tr>
                    <button>Id :</button>

                    <button>Name :</button>

                    <button>UserName :</button>

                    <button>Email :</button>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>{SingleUser.id}</td>
                <td>{SingleUser.name}</td>
                <td>{SingleUser.username}</td>
                <td>{SingleUser.email}</td>
            </tr>
            </tbody>
        </Table>
        </div>
    );
}
export default ListUser ; 