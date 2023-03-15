import React from 'react'
import LoginForm from '../components/Login'

function Login() {
    return (
        <div>
            <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src="img/default.jpg" className="w-full h-full object-cover" />
                </div>

                <LoginForm/>
            </section>
        </div>
    )
}

export default Login