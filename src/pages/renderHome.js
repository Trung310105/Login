import { $main, router } from "../main";
import { Navbar } from "./render";

function renderHome()
{
    $main.innerHTML = Navbar();
    document.getElementById("login").addEventListener('click', () => {
        router.navigate('/login');
    })
}

export {renderHome};