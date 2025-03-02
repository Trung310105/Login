import Navigo from 'navigo'; 
import { renderHome } from './pages/renderHome';
import { renderLogin } from './pages/renderLogin';

const $main = document.getElementById("main");

const router = new Navigo('/');

router.on('/', () => {
    renderHome()
});

router.on('/login', () => {
    renderLogin()
});

router.resolve();

export {router, $main}