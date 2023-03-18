import { React, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';


function RegisterForm() {
    const [username, usernamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    
    const navigate = useNavigate();
    
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (username === null || username === '') {
            isproceed = false;
            errormessage += " Nom d'utilisateur";
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Mot de passe';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
    
        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    
            } else {
                isproceed = false;
                toast.warning('Email non valide')
            }
        }
        return isproceed;
    }
    
    
    const handlesubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        let regobj = { id, username, password, email };
        if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:8000/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Inscription prise en compte, vous êtes connecté.');
                sessionStorage.setItem('username',username);
                sessionStorage.setItem('status','setup');
                sessionStorage.setItem('id',id);
                navigate('/setup');
            }).catch((err) => {
                toast.error('Erreur lors du traitement :' + err.message);
            });
        }
    }

    return (
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center">

            <div className="w-full h-100">
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Créer un compte</h1>
                <form className="mt-6" action="#" onSubmit={handlesubmit}>
                    <div>
                        <label className="block text-gray-700">Nom d'utilisateur</label>
                        <input placeholder="Entrez le pseudo désiré" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required value={username} onChange={e => usernamechange(e.target.value)}></input>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Email</label>
                        <input placeholder="Entrez votre email" required value={email} onChange={e => emailchange(e.target.value)} type="email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"></input>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Mot de passe</label>
                        <input placeholder="Entrez un mot de passe" required value={password} onChange={e => passwordchange(e.target.value)} type="password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"></input>
                    </div>
                    <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">S'inscrire</button>
                </form>
                <hr className="my-6 border-gray-300 w-full" />
                <p className="mt-8">Déjà un compte ? <Link to={'/login'} className="text-blue-500 hover:text-blue-700 font-semibold">Se connecter</Link></p>
            </div>
        </div>
    )
}

export default RegisterForm