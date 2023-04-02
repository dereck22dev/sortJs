import('./modules/sortJs.mjs').then((Module)=>{
    /**
     * Initialisation des variables avec les composants
     * */

    /**
     * composants de selections
     */
    let componentsButtons = document.querySelectorAll('.componentsButton');
    /**
     * composant à trier
     */
    let components = document.querySelectorAll('.component');
    //appel de la fonction de trie
    Module.sort(componentsButtons,components);

    //footer
    document.querySelector('#year').textContent = new Date().getFullYear();
});