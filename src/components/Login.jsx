import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8000/users/").then((res) => {
                return res.json();
            }).then((resp) => {               
                if (resp.some(user => user.username === username && user.password === password)) {
                    toast.success('Connecté');
                    let status = resp.find(user => user.username === username && user.status);
                    if (status)
                        sessionStorage.setItem('status',status.status);
                    sessionStorage.setItem('username',username);
                    sessionStorage.setItem('id',status.id);
                    usenavigate('/');
                    window.location.reload();
                }else{
                    console.log(resp);
                    toast.error('Identifiants invalides');
                }
            }).catch((err) => {
                toast.error('Connexion échouée :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Champ de pseudo vide');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Champ de mot de passe vide');
        }
        return result;
    }

  return (
    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center">

        <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Se connecter</h1>
            <form className="mt-6" action="#" onSubmit={ProceedLogin}>
                <div>
                    <label className="block text-gray-700">Username</label>
                    <input type="text" value={username} onChange={e => usernameupdate(e.target.value)} placeholder="Entrez votre pseudo" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" placeholder="Entrez votre mot de passe" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required value={password} onChange={e => passwordupdate(e.target.value)}/>
                </div>
                <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Se connecter</button>
            </form>
            <hr className="my-6 border-gray-300 w-full" />
            <p className="mt-8">Besoin d'un compte ? <Link to={'/register'} className="text-blue-500 hover:text-blue-700 font-semibold">S'inscrire</Link></p>
        </div>
    </div>
  );
}

export default LoginForm;