import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Notify } from 'notiflix'

const Dashboard = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('http://localhost:3000/get-streetlight-pole')
            .then((res) => {
                // console.log(res);
                const successResult = res.data.result;
                setData(successResult);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleUpdate = (id) => {
        // console.log("Update button clicked for index:", index);
        window.location.href = `/update/${id}`;
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/delete-streetlight-pole', { data: { id } })
            .then(() => {
                // console.log("Delete button clicked for index:", index);
                setData(data.filter(item => item.id !== id));
                Notify.success('Successfully');
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
                Notify.failure('Failed to delete data');
            });
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mx-auto">
            <h4 className="text-3xl font-bold mt-8 mb-4">Quantity of Streetlight Pole&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;{data.length}</h4>
            <a href='/'>Logout</a>
            &nbsp;
            ||
            &nbsp;
            <a href='/add'>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </a>
            <hr />
            <div className="overflow-x-auto">
                <hr />
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">No</th>
                            &nbsp;
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Name</th>
                            &nbsp;
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Location</th>
                            &nbsp;
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Latitude</th>
                            &nbsp;
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Longtitude</th>
                            &nbsp;
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td className="px-6 py-3 whitespace-nowrap border border-gray-300">{i + 1}</td>
                                &nbsp;
                                <td className="px-6 py-3 whitespace-nowrap border border-gray-300">{d.name}</td>
                                &nbsp;
                                <td className="px-6 py-3 whitespace-nowrap border border-gray-300">
                                    <a href={d.link_location} target='_blank'>
                                        {d.location}
                                    </a>
                                </td>
                                &nbsp;
                                <td className="px-6 py-3 whitespace-nowrap border border-gray-300">{d.lat}</td>
                                &nbsp;
                                <td className="px-6 py-3 whitespace-nowrap border border-gray-300">{d.lon}</td>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <td className="px-6 py-3 whitespace-nowrap border border-gray-300">
                                    <button onClick={() => handleUpdate(d.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Update</button>
                                    &nbsp;
                                    <button onClick={() => handleDelete(d.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 whitespace-nowrap text-center border border-gray-300">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
