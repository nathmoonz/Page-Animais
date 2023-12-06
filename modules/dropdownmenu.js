export default function initDropDown() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');


    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener('click', handleClick);
        })
        
    });
    
    function handleClick(event){
        event.preventDefault();
        this.classList.add('active')
        outsideClick(this,() => {
            this.classList.remove('active');
        });
    };
    
    function outsideClick(element, callback){
        const html = document.documentElement;
        const outside = 'data-outside'
    
        if(!element.hasAttribute(outside)) {
        html.addEventListener('click', handleOutsideClick);
        element.setAttribute(outside);
        }
    
        function handleOutsideClick(event){
            if(!element.contains(event.target)){
    
                html.removeEventListener('click', handleOutsideClick);
            callback();
        }
        };
    }
}

