const button = document.querySelector('.nav_toggle');
const list = document.querySelector('.links')

button.addEventListener('click', function()
{
    /*
    console.log(list.classList)
    console.log(list.classList.contains("random"))
    console.log(list.classList.contains("links")) 
    */

    list.classList.toggle('active_nav')
});