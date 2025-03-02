import { router } from "../main"

function Profile(){
    return `
        <div class="w-full h-[80px] shadow-lg flex items-center justify-end gap-x-[20px] pr-[10px]">
            <div id="profile" class = "w-[118px] h-[46px] bg-sky-500 rounded-md flex items-center justify-center">
                <p class="text-white text-lg font-bold">TTCN</p>
            </div>
            <div id="logout" class = "w-[118px] h-[46px] bg-sky-500 rounded-md flex items-center justify-center">
                <p class="text-white text-lg font-bold">Đăng xuất</p>
            </div>
        </div>
    `
}

function Box(){
    return `
        <div class="w-full flex items-center justify-center">
            <form id="myForm" class="shadow-lg w-[360px] h-[360px] rounded-lg mt-[140px] flex flex-col text-xl mx-[15px] py-[20px] gap-[10px]">
                <p class="font-bold text-3xl mx-auto my-[0]">Đăng nhập</p>
                <div class="flex flex-col gap-[2px] my-[10px]">
                    <label for="name" class="ml-[20px] mb-[5px]">Tên đăng nhập</label>
                    <input type="text" id="username" placeholder="Nhập tên đăng nhập" class="border-[1px] border-gray-300 rounded-sm pl-[10px] py-[5px] ml-[20px] w-[90%]"/>
                </div>
                <div class="flex flex-col gap-[2px] my-[10px]">
                    <label for="pass" class="ml-[20px] mb-[5px]">Mật khẩu</label>
                <input type="password" id="password" placeholder="Nhập mật khẩu" class="border-[1px] border-gray-300 rounded-sm pl-[10px] py-[5px] ml-[20px] w-[90%]"/>
                </div>
                <button id="btn" class="bg-sky-500 px-[8px] py-[10px] rounded-lg text-white mx-[120px] mt-[10px]">Đăng nhập</button>
            </form>
        </div>
    `
}

function Form(){
    return `
        <div class="w-full flex items-center justify-center">
            <form id="myForm" class="shadow-lg w-[360px] h-[360px] rounded-lg mt-[140px] flex flex-col text-xl mx-[15px] py-[20px] gap-[10px]">
                <p class="font-bold text-3xl mx-auto my-[0]">Đăng nhập</p>
                <div class="flex flex-col gap-[2px] my-[10px]">
                    <label for="name" class="ml-[20px] mb-[5px]">Tên đăng nhập</label>
                    <input type="text" id="username" placeholder="Nhập tên đăng nhập" class="border-[1px] border-gray-300 rounded-sm pl-[10px] py-[5px] ml-[20px] w-[90%]"/>
                </div>
                <div class="flex flex-col gap-[2px] my-[10px]">
                    <label for="pass" class="ml-[20px] mb-[5px]">Mật khẩu</label>
                <input type="password" id="password" placeholder="Nhập mật khẩu" class="border-[1px] border-gray-300 rounded-sm pl-[10px] py-[5px] ml-[20px] w-[90%]"/>
                </div>
                <p class="text-xs text-red-600 pl-[24px] mt-[-14px]">Tài khoản hoặc mật khẩu không chính xác</p>
                <button class="bg-sky-500 px-[8px] py-[10px] rounded-lg text-white mx-[120px] mt-[10px]">Đăng nhập</button>
            </form>
        </div>
    `
}

function Navbar()
{
    return `
        <div class="w-full h-[80px] shadow-lg flex items-center relative">
            <div id="login" class = "w-[118px] h-[46px] bg-sky-500 absolute right-[20px] rounded-md flex items-center justify-center">
                <p class="text-white text-lg font-bold">Đăng nhập</p>
            </div>
        </div>
    `
}

function User()
{
    return `
        <div id="tt" class="w-full h-[500px] mt-[80px] flex items-center justify-center hidden  ">
            <p id="name" class="font-bold text-3xl"></p>
        </div>
    `
}

function Logout()
{
    document.getElementById('logout').addEventListener('click', () => {
        const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất");
        if(confirmLogout)
        {
            router.navigate('/');
        }
    })
}

function TTCN()
{
    document.getElementById('profile').addEventListener('click', () => {
        console.log('cccc') 
        const $username = document.getElementById('tt');
        if($username.classList.contains('hidden'))
        {
            $username.classList.remove('hidden');
        }
        else
        {
            $username.classList.add('hidden');
        }
    })
}

export {Navbar, Box, Profile, Form, Logout, User, TTCN}