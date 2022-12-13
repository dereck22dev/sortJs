import('./modules/sortJs.mjs').then((Module)=>{
    //Declaration des variables
    let componentsButtons = document.querySelectorAll('.componentsButton');
    let components = document.querySelectorAll('.component');
    Module.sort(componentsButtons,components);
});