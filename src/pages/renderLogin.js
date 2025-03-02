import { $main } from "../main";
import { Box, Form, Logout, Navbar, Profile, TTCN, User } from "./render";

function Check_Login()
{
    document.getElementById('myForm').addEventListener('submit', function(e){
        event.preventDefault();
        const tk = document.getElementById("username").value;
        const mk = document.getElementById("password").value;
        const tkmk = {
            tk,
            mk,
        }

        if(tk === "" || mk === "")
        {
            alert("Đăng nhập vào đã nào^-^")
        }
        else
        {
            fetch("https://auth-wit.vercel.app/auth/login", {
                method : 'POST',
                body : JSON.stringify(tkmk),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
                .then(response => {
                    if(!response.ok)
                    {
                        throw new Error("Lỗi đăng nhập");
                    }
                    return response.json();
                })
                .then(data => {
                    alert("Đăng nhập thành công");
                    console.log(data);
                    localStorage.setItem("user", tk);
                    document.getElementById('main').innerHTML = `
                        ${Profile()}
                        ${User()}
                    `
                    setTimeout(() => {
                        document.getElementById("name").textContent = "Tên đăng nhập là : " + window.localStorage.getItem("user");
                      }, 0);
                    Logout();
                    TTCN();
                })
                .catch(error => {
                    alert("Đăng nhập thất bại");
                    $main.innerHTML =  `
                        ${Navbar()}
                        ${Form()}
                    `
                })
        }
    })
}

function renderLogin(){
    document.querySelector('#main').innerHTML = `
        ${Navbar()}
        ${Box()}
    `;

    Check_Login();
}

export {renderLogin}
