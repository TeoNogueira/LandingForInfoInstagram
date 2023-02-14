export function exColor () {

    
 const transfSt = () => {
    
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

}

transfSt()
}