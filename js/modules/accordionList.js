

export function initAccordionList() {
const listDtItens = document.querySelectorAll('[data-accordion] dt');



if(listDtItens.length) {
    listDtItens.forEach(item => {

    item.addEventListener('click', handleClick)

    function handleClick() {
        item.classList.toggle('ativo')
        item.nextElementSibling.classList.toggle('ativo');


    }


})}




}