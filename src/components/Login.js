import axios from 'axios';
import swAlert from '@sweetalert/with-react'


function Login() {

  
  const submitHandler = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email === '' || password === '') {
      swAlert(
        <div>
        <h2>Los campos no pueden estar vacios!!</h2>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/120px-Nuvola_apps_error.svg.png' />
        </div>
          )
         return;
       }
    
    if (email !== '' && !regexEmail.test(email)) {
      swAlert(
        <div>
        <h2>Debes ingresar un correo y contraseña validos!!</h2>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/120px-Nuvola_apps_error.svg.png' />
        </div>
          )
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert(
        <div>
        <h2>Credenciales inválidas!!</h2>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/120px-Nuvola_apps_error.svg.png' />
        </div>
          )
      return;

    }

    
    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        swAlert(
          <div>
          <h2>Ingresaste correctamente!!</h2>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0BaBqSYNu5FoI5iuPtnSi4eN3kRcdAKJKw&usqp=CAU' />
          </div>
            )
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido);
      })
  }

 
  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo Electrónico:</span> <br/>
        <input type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña:</span> <br />
          <input type="password" name="password" />
          </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  )
}

export default Login;