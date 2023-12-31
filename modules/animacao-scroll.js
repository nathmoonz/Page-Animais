export default function initAnimationScroll(){
    const section = document.querySelectorAll('[data-anime="scroll"]');

    if(section.length){
        const windowMetade = window.innerHeight * 0.6

        function animaScroll(){
            section.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible){
                    section.classList.add('ativo');
                } else if (section.classList.contains('ativo')){
                    section.classList.remove('ativo')
                }
            });
        };

        animaScroll();

    window.addEventListener('scroll', animaScroll);
    };
};