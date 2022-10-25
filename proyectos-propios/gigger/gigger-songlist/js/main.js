import { Footer } from './footer';
import { Header } from './header'
import { mainView } from './mainView';
import '/css/style.css'

const app = document.querySelector('#app')

app.innerHTML += Header();
app.innerHTML += mainView();
app.innerHTML += Footer();
