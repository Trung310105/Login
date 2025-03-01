import { router } from "../main";

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

function Profile()
{
    return `
        <div class="w-full h-[80px] shadow-lg flex items-center relative">
            <div id="profile" class = "w-[118px] h-[46px] bg-sky-500 absolute right-[20px] rounded-md flex items-center justify-center">
                <p class="text-white text-lg font-bold">Profile</p>
            </div>
        </div>
    `
}

function renderHome()
{
    // if(localStorage.getItem("check") == null)
    // {
        document.querySelector('#main').innerHTML = Navbar();

        document.querySelector('#login').addEventListener('click', () =>{
            router.navigate('/login');
            console.log(document.querySelector('#login'))
        })
    // }
    // else
    // {
    //     document.querySelector('#main').innerHTML = `
    //         ${Profile()}

    //         <div id="username" class="w-[18%] h-0 rounded-md shadow-lg text-xl trasition-all duration-500">
    //             <p></p>
    //         </div>
    //     `
    //     document.getElementById("profile").addEventListener('click', () => {
    //         const $user = document.getElementById(username);
    //         if($user.classList.contains('h-0'))
    //         {
    //             $user.classList.remove('h-0');
    //             $user.classList.add('h-[50px]');
    //         }
    //         else
    //         {
    //             $user.classList.remove('h-[50px]');
    //             $user.classList.add('h-0');
    //         }
    //     })
    // }
}

export {renderHome, Navbar};