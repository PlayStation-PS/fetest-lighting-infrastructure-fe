import React, { useState } from 'react'
import axios from 'axios'
import { Notify } from 'notiflix'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [linkLocation, setLinkLocation] = useState("")
    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")

    const addData = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/add-streetlight-pole', {
            name,
            location,
            link_location: linkLocation,
            lat,
            lon
        })
            .then((res) => {
                // console.debug(res)
                Notify.success("Successfully")
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err)
                Notify.failure("Failed")
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Data</h2>
                </div>
                <hr />
                <br />
                <form onSubmit={addData} className="mt-8 space-y-6">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label className="sr-only">Name</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter name" />
                        </div>
                        <div>
                            <label className="sr-only">Location</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter location" />
                        </div>
                        <div>
                            <label className="sr-only">Link Google Maps</label>
                            &nbsp;&nbsp;&nbsp;
                            <input type="text" value={linkLocation} onChange={(e) => setLinkLocation(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter link google maps" />
                        </div>
                        <div>
                            <label className="sr-only">Latitude</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter latitude" />
                        </div>
                        <div>
                            <label className="sr-only">Longtitude</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" value={lon} onChange={(e) => setLon(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter longtitude" />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <a href='/dashboard'>
                        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Back
                        </button>
                    </a>
                    &nbsp;
                    <button type='submit' className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Add