let count = 0;

const value = document.querySelector('#digit');
const btns = document.querySelectorAll('.btn');

btns.forEach( function(item) {
    item.addEventListener('click', function(e) {
        let cls = (e.currentTarget.classList);

        if(cls.contains('increase'))
            count++;
        
        else if(cls.contains('decrease'))
            count--;

        else 
            count = 0;

        value.innerHTML = count;
    })
});

