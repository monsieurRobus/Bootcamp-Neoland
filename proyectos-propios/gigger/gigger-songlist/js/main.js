import { Footer } from './footer';
import { Header } from './header'
import { MainView } from './mainView';
import '/css/style.css'
import '/css/cancion.css'
import '/css/lista.css'

const app = document.querySelector('#app')

app.innerHTML += Header();
app.innerHTML += MainView();
app.innerHTML += Footer();
