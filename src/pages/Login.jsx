import React, { useState } from 'react'
import axios from 'axios'
import { Notify } from 'notiflix'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            })
            if (response.data.success === true) {
                Notify.success("Login successful")
                navigate('/dashboard')
            } else {
                Notify.failure("Incorrect username or password")
            }
        } catch (error) {
            console.error("Error during login:", error)
            Notify.failure("Incorrect username or password")
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <br />
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label className="sr-only">Username&nbsp;&nbsp;&nbsp;: </label>
                            &nbsp;&nbsp;&nbsp;
                            <input
                                id="username"
                                type="text"
                                autoComplete="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter username"
                            />
                        </div>
                        <hr />
                        <div>
                            <label className="sr-only">Password&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Register Account
                            </a>
                        </div>
                    </div>
                    <br />
                    <button type='submit' className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login