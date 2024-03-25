const panels = document.querySelectorAll('.panel')
const active = document.getElementsByClassName('active')



panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
});

function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')

    })
}
