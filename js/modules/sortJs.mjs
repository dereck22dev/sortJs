export function sort(componentsButtons,components) {
    componentsButtons.forEach(button =>{
        //On recupere le role du bouton au click
        button.onclick=()=>{
            //role du bouton
            let role=button.dataset.role;
            //on boucle sr les composants a trier
            for (let component of components) {
                //on initialise l'affichage du composant dans le rendu
                component.style.display='initial';
                //on stock les valeurs data-* du composant
                let list=component.dataset.list;
                //on verifie si le composant possede le role du button cliqué. si il ne possede pas on le retire du flux d'affichage
                if (!list.match(role)){
                    component.style.display='none';
                }
            }
        }
    })
}