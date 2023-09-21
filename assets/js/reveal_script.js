    
function updateCount() {

    let counter = sessionStorage.getItem('viewCount');
    sessionStorage.setItem('viewCount', counter);
    document.querySelector('#count').innerText = counter
}
    
function revealed(a, b, c) {

    return ScrollReveal().reveal(a, b, c)
}

updateCount()

revealed('.text-ava', {duration: 4000})
revealed('.text-ava-2', {duration: 2000})
revealed('.img-ava', {duration: 1500})
revealed('.__h2', {duration: 2500})
revealed('.__p', {duration: 2500})
revealed('.border-01', {duration: 2000})
revealed('.border-02', {duration: 2000})
revealed('.list', {duration: 5000})
revealed('.foot', {duration: 4000})

