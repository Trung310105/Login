import { Navbar } from "./renderHome"

function renderLogin(){
    document.querySelector('#main').innerHTML = `
        ${Navbar()}
        <div class="w-full flex items-center justify-center">
            <form id="btn" class="shadow-lg w-[380px] h-[360px] rounded-lg mt-[140px] flex flex-col text-xl mx-[15px] py-[20px] gap-[10px]">
                <p class="font-bold text-3xl mx-auto my-[0]">Đăng nhập</p>
                <div class="flex flex-col gap-[2px] my-[10px]">
                    <label for="name" class="ml-[20px] mb-[5px]">Tên đăng nhập</label>
                    <input type="text" id="username" placeholder="Nhập tên đăng nhập" class="border-[1px] border-gray-300 rounded-sm pl-[10px] py-[5px] ml-[20px] w-[85%]"/>
                </div>
                <div class="flex flex-col gap-[2px] my-[10px]">
                    <label for="pass" class="ml-[20px] mb-[5px]">Mật khẩu</label>
                <input type="password" id="password" placeholder="Nhập mật khẩu" class="border-[1px] border-gray-300 rounded-sm pl-[10px] py-[5px] ml-[20px] w-[85%]"/>
                </div>
                <button class="bg-sky-500 px-[8px] py-[10px] rounded-lg text-white mx-[120px] mt-[10px]">Đăng nhập</button>
            </form>
        </div>
    `;

    document.querySelector('#btn').addEventListener('submit', function(e) {
        event.preventDefault();
        const tk = document.getElementById("username").value;
        const mk = document.getElementById("password").value;
        let tkmk = {
            username : tk,
            password : mk,
        }      
        if(tk === "" || mk === "")
        {
            alert("Vui lòng nhập đủ thông tin");
        }
        else
        {
            localStorage.setItem("user", JSON.stringify(tkmk));
            fetch("https://auth-wit.vercel.app/auth/login", {
                method: "POST",
                body: JSON.stringify(tkmk),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(response => {
                    if(!response.ok)
                    {
                        throw new Error("Lỗi đăng nhập")
                    }
                    return response.json();
                })
                .then( data => {
                    alert("Đăng nhập thành công")
                    localStorage.setItem('token', data.token);
                    // location.href = "./index.html"
                })
                .catch(error => {
                    alert("Tài khoản hoặc mật khẩu không chính xác")
                    // location.href = "/test.html"
                })
        }
    })
}

export {renderLogin}
