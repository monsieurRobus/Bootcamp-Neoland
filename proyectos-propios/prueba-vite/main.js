import { Albumes } from './albumes';
import { Biografia } from './biografia';
import { Header } from './header'
import './style.css'

// ALmacenamos los contenedores e IDS
const header = document.querySelector('#index-header')
const biografia = document.querySelector('#biografia')
const albumes = document.querySelector('#albumes')


// Dibujamos el contenido de cada elemento
header.innerHTML = Header()
biografia.innerHTML = Biografia()
albumes.innerHTML = Albumes()
