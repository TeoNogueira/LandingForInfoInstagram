      function stChange(a, old, nova) {
     
            a.classList.remove(old)
            a.classList.add(nova)
        }

        setInterval(() => {
            const doc = document.querySelector('#img');
           stChange(doc, 'cb-0', 'cb-1');
        }, 5000);
       
            

    setInterval(() => {
        const doc = document.querySelector('#img');
       stChange(doc, 'cb-1', 'cb-2');
    }, 4000);

    setInterval(() => {
        const doc = document.querySelector('#img');
       stChange(doc, 'cb-2', 'cb-0');  
}, 7000);


function visitsNow(res) {

    document.querySelector('.count').textContent = res.value;
    
}
    

function revealed(a, b, c) {

    return ScrollReveal().reveal(a, b, c)
}

revealed('.text-ava', {duration: 4000})
revealed('.text-ava-2', {duration: 2000})
revealed('.img-ava', {duration: 1500})
revealed('.__h2', {duration: 2500})
revealed('.__p', {duration: 2500})
revealed('.border-01', {duration: 2000})
revealed('.border-02', {duration: 2000})
revealed('.list', {duration: 5000})
revealed('.foot', {duration: 4000})
