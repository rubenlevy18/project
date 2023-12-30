import axios from 'axios';
import React, { useEffect, useState, Fragment } from 'react'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from '../components/Pagination';
import { AddUser } from '../components/AddUser';
import { EditableRow } from '../components/EditableRow';

function Home(){
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [first, setFirst] = useState()
    const [last, setLast] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const recordsPerPage = 5
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);

        useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10')
        .then(res => setData(res.data.results))
        .catch(err => console.log(err));
    },[])

    function handleDelete(id){
        const newList = data.filter(li => li.id !== id)
        setData(newList)
    }

    return (
        <div class="d-flex flex-column justify-content-center align-items-center bg-light">
                <table className="table table striped border shadow p-4">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>User Image</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Street</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map((d, i) => (
                               <Fragment>
                                <tr key={i}>
                                    <td>{d.name.title}</td>
                                    <td value={first}>{d.name.first}</td>
                                    <td value={last}>{d.name.last}</td>
                                    <td value={email} className="email">{d.email}</td>
                                    <td><img src={d.picture.medium}></img></td>
                                    <td value={country}>{d.location.country}</td>
                                    <td value={city}>{d.location.city}</td>
                                    <td value={street}>{d.location.street.name}</td>
                                    <td>{d.login.uuid}</td>
                                    <td className="row-buttons">
                                        <EditableRow  first={first} last={last} 
                                        email={email} country={country} 
                                        city={city} street={street} setFirst={setFirst} setLast={setLast} 
                                        setEmail={setEmail} setCountry={setCountry} 
                                        setCity={setCity} setStreet={setStreet} /> 
                                        <button  type="button" className="btn btn-sm btn-danger" onClick={()=> handleDelete(d.login.uuid)}>Delete</button>
                                    </td>
                                </tr>  
                                </Fragment>
                            ))
                        }
                    </tbody>
                </table>
                    <AddUser data={data} setData={setData}/>
                    <Pagination data={data} recordsPerPage={recordsPerPage} currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>
    )
}

export default Home