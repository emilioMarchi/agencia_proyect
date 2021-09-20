$(document).ready( () => {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    $('.cards-planes').on('click', (e) => {
        const element = e.target;
        const id = e.target.id;
        const addDescription = (i) => {
            $(`#${id}>p`).toggle(500);
        }
        if(id.length >= 1) {
            addDescription(id)
        } else {
            const card = $(element).closest('.cards-planes');
            const cardId = card.attr('id');
            $(`#${cardId}>p`).toggle(500);
        }
    })
    $('.cards-services').on('click', (e) => {
        const element = e.target;
        const id = e.target.id;
        const addDescription = (i) => {
            $(`#${id}>p`).toggle(500);
        }
        if(id.length >= 1) {
            addDescription(id)
        } else {
            const card = $(element).closest('.cards-services');
            const cardId = card.attr('id');
            $(`#${cardId}>p`).toggle(500);
        }
    })

})
