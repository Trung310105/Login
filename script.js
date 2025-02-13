const addStyle = (el, str) => {
    str.split(' ').forEach((style) => el.classList.add(style));
};
const removeStyle = (el, str) => {
    str.split(' ').forEach((style) => el.classList.remove(style));
};

const showtext = document.querySelectorAll('.box');

showtext.forEach(temp => {
    temp.addEventListener("click", function (){
        const parent = temp.parentElement;

        const child = parent.children[1];

        console.log(child)

        if(child.classList.contains('max-h-0'))
        {
            addStyle(child, 'max-h-40')
            addStyle(parent, 'z-1 shadow-xl')
            addStyle(temp.children[1], 'rotate-[180deg]')
            removeStyle(child, 'max-h-0')
            removeStyle(temp.children[1], 'rotate-0')
        }
        else
        {
            removeStyle(child, 'max-h-40')
            removeStyle(parent, 'z-1 shadow-xl')
            removeStyle(temp.children[1], 'rotate-[180deg]')
            addStyle(child, 'max-h-0')
            addStyle(temp.children[1], 'rotate-0')
        }
    })
})

const menu = document.querySelector(".menu")

menu.addEventListener("click", function (){
    const box = menu.parentElement.parentElement.children[1];

    if(box.classList.contains('translate-x-[-9999px]'))
    {
        addStyle(box,'z-3')
        addStyle(box.parentElement, 'bg-linear-to-r from-gray-300 to-gray-600 z-2')
        removeStyle(box, 'translate-x-[-9999px]')
    }
})

document.addEventListener("click", (e) => {
    if(e.target.classList.contains('z-2'))
    {
        console.log(e.target)
        addStyle(menu.parentElement.parentElement.children[1], 'translate-x-[-9999px]');
        removeStyle(menu.parentElement.parentElement.children[1], 'z-3');
        removeStyle(menu.parentElement.parentElement, 'bg-linear-to-r from-gray-300 to-gray-600 z-2')
    }
})