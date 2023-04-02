/**
 * Permet d'effectuer un trie dans une collection de composants grâce à un composant de selection.
 * @param {HTMLAllCollection} componentsButtons les boutons qui activent le trie;
 * @param {HTMLAllCollection} components les composants à trier
 */
export function sort(componentsButtons,components) {
    componentsButtons.forEach(button =>{
        //On recupere le rôle du bouton au click
        button.onclick=()=>{
            /**
             rôle du bouton sélectionné
             */
            let role = button.dataset.role;

            setTimeout(() => {
                //on boucle sur les composants a trier
                for (let component of components) {
                    //on initialise l'affichage du composant dans le rendu
                    component.style.display='initial';
                    //on stock les valeurs data-* du composant
                    let list = component.dataset.list;
                    //on verifie si le composant possède le rôle du button cliqué.
                    // s'il ne possede pas on le retire du flux d'affichage
                    if (!list.match(role)){
                        component.style.display='none';
                    }
                }  
            }, 500);
        }
    })
}