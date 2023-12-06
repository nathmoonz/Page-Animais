export default function initAccordion() {
    const accordionLista = document.querySelectorAll('[data-anime="accordion"] dt');
    const ActiveClass = 'ativo'

    if(accordionLista.length){
    accordionLista[0].classList.add(ActiveClass)
    accordionLista[0].nextElementSibling.classList.add(ActiveClass);

    function activeAccordion() {
        this.classList.toggle(ActiveClass);
        this.nextElementSibling.classList.toggle(ActiveClass);
    };

    accordionLista.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });
};
};