const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
})


// this muda de contexto. As vezes é o card as vezes o dropzone


function dragstart() {
    // console.log( 'start');
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'));

    // this = card
    this.classList.add('is-dragging');
}

function drag() {
    console.log( 'drag');
}

function dragend() {
    //console.log( 'dragend');
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'));

    // this = card
    this.classList.remove('is-dragging');
}

/** Drop zone */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
})

function dragenter() {
    console.log( 'dragend');  
};

function dragover() {
    // console.log( 'dragend');

    // this = dropzone
    this.classList.add('over');

    const cartao = document.querySelector('.is-dragging');

    // Adicionar o card na dropzone
    this.appendChild( cartao );

};

function dragleave() {
    // console.log( 'dragend');

    // this = dropzone
    this.classList.remove('over');

};

function drop() {
    console.log( 'dragend');

    // this = dropzone
    this.classList.remove('over');
};
