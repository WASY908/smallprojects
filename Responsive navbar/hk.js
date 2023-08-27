const toggleBtn=document.querySelector('.toggle_btn')
const toggleBtnIcon=document.querySelector('.toggle_btn i')
const dropdownmenu=document.querySelector('.dropdown_menu')

toggleBtn.onclick =function  ()
{
    dropdownmenu.classList.toggle('open')
    const isopen=dropdownmenu.classList.contains('open')

    toggleBtnIcon.classList = isopen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}