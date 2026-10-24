// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.
const detail = document.getElementById("detail")
function showDetail(card){
  const atkPercent = typeof card.atk === "number" ? Math.min(card.atk / 5000 * 100, 100) : 100
  const defPercent = typeof card.def === "number" ? Math.min(card.def / 5000 * 100, 100) : 100
  detail.innerHTML= `
       <div class="flex items-center justify-between">
            <span class="font-mono text-sm text-muted">#${String(card.id).padStart(3 ,"0")} · Détail</span>
            <button type="button" id="ferme" aria-label="Fermer le détail" class="btn-outline w-11 px-0 hover:bg-invalid">✕</button>
          </div>
          <div class="relative flex h-70  items-center justify-center rounded-xl bg-brand-light">
            <!-- <svg aria-hidden="true" class="h-20 w-20 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c0-5 3.5-9 8-9s8 4 8 9"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7 7 5 3M17 7l2-4"></path></svg> -->
            <img src="${card.image}" alt="${card.name}" class="h-full w-full " >
          </div>
          <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold">${card.name}</h2>
            <span class="rounded-full ${card.attrClass} px-3 py-1 text-sm font-bold text-ink">${card.attribute}</span>
          </div>
          <p class="text-gray-700">${card.description}</p>
          <div class="flex flex-col gap-2 text-sm">


            <!-- <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Etoiles</span><span class="h-3 rounded-full bg-brand-light"><span class="block h-3 w-[30%] rounded-full bg-brand"></span></span><span class="text-right font-mono">45</span></div> -->
            <div class="flex flex-col gap-1 text-sm">
               <div class="flex items-center justify-between">
                  <span class="font-bold">Étoiles</span>
                  <span class="font-mono">${card.level}</span>
               </div>
               <div class="flex flex-wrap gap-0.5 text-xl leading-none" role="img" aria-label="${card.level} étoiles sur 12">
                <p class="text-sm text-muted">${"★".repeat(card.level)}</p>
              <!-- 2 empty stars -->
                 <span class="text-line/30">${"★".repeat( 12 - card.level)}</span>
              </div>
          </div>
            
            
            
         <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">ATK</span><span class="h-3 rounded-full bg-brand-light"><span class="block h-3 rounded-full bg-brand" style="width: ${atkPercent}%"></span></span><span class="text-right font-mono">${card.atk}</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">DEF</span><span class="h-3 rounded-full bg-brand-light"><span class="block h-3 rounded-full bg-brand" style="width: ${defPercent}%"></span></span><span class="text-right font-mono">${card.def}</span></div>
          </div>
          <button type="button" class="bg-gold-metal text-ink font-semibold focus:ring-1 focus:ring-gold-light btn-primary hover:border-2 hover:border-card-xyz hover:bg-none hover:bg-gold-dark">Ajouter à l'équipe</button>
        
  `
}


const grid = document.getElementById("grid")

const cardClass = "flex flex-col gap-3 rounded-card bg-white p-3 pb-4    h-full w-full        cursor-pointer transition-[transform,translate,scale,rotate,opacity,box-shadow] duration-300 group-hover:opacity-35 group-hover:scale-95 hover:opacity-100! hover:scale-100 hover:-translate-y-2.5 hover:shadow-[0_16px_36px_rgba(0,0,0,.4)] focus-visible:opacity-100! focus-visible:-translate-y-2.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-thv18-green motion-reduce:transition-none "

grid.innerHTML = ""

cards.forEach(card =>{
    const article = document.createElement("article")

    article.className = cardClass
    article.setAttribute("id", "card")
    article.innerHTML = `
           <div class="relative flex h-70 items-center justify-center rounded-xl bg-brand-light ">
              <img src="${card.image}" alt="${card.name}" class="h-full w-full " >
             <span class="absolute left-3 top-2 font-mono text-sm text-muted">#${String(card.id).padStart(3 ,"0")}</span>
           </div>
           <div class="flex items-center justify-between gap-2">
             <h3 class="font-display text-xl font-semibold">${card.name}</h3>
             <span class="rounded-full ${card.attrClass} px-3 py-1 text-sm font-bold text-ink">${card.attribute}</span>
           </div>
           <p class="text-sm font-semibold">ATK ${card.atk} / DEF ${card.def}</p>
           <button type="button" class="btn-outline mt-auto hover:bg-gold-metal hover:border-0">Ajouter à l'équipe</button>
           `;

     article.addEventListener('click' , function(){
      showDetail(card);
    })

    grid.appendChild(article);
});

detail.querySelector('button').addEventListener('click', function(){
  detail.innerHTML=""
})


// <!-- <svg aria-hidden="true" class="h-14 w-14 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c0-5 3.5-9 8-9s8 4 8 9"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7 7 5 3M17 7l2-4"></path></svg> -->

//   article.innerHTML = `
//     <div class="relative flex h-70 items-center justify-center rounded-xl bg-brand-light">
//       <img src="${card.image}" alt="${card.name}" class="h-full w-full">
//       <span class="absolute left-3 top-2 font-mono text-sm text-muted">#${String(card.id).padStart(3, "0")}</span>
//     </div>
//     <div class="flex items-center justify-between gap-2">
//       <h3 class="font-display text-xl font-semibold">${card.name}</h3>
//       <span class="rounded-full ${card.attrClass} px-3 py-1 text-sm font-bold text-ink">${card.attribute}</span>
//     </div>
//     <p class="text-sm text-muted">${"★".repeat(card.level)} · ${card.type}</p>
//     <p class="text-sm font-semibold">ATK ${card.atk} / DEF ${card.def}</p>
//     <p class="text-sm text-muted">${card.description}</p>
//     <button type="button" class="btn-outline mt-auto hover:bg-gold-metal hover:border-0">Ajouter à l'équipe</button>
//   `;

// <!-- Carte écrite à la main : à remplacer par des cartes générées en JS (Partie 2) -->
//         <article class="flex flex-col gap-3 rounded-card bg-white p-3 pb-4    h-full w-full        cursor-pointer transition-[transform,translate,scale,rotate,opacity,box-shadow] duration-300 group-hover:opacity-35 group-hover:scale-95 hover:opacity-100! hover:scale-100 hover:-translate-y-2.5 hover:shadow-[0_16px_36px_rgba(0,0,0,.4)] focus-visible:opacity-100! focus-visible:-translate-y-2.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-thv18-green motion-reduce:transition-none  ">
//           <div class="relative flex h-70 items-center justify-center rounded-xl bg-brand-light ">
//             <!-- <svg aria-hidden="true" class="h-14 w-14 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c0-5 3.5-9 8-9s8 4 8 9"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7 7 5 3M17 7l2-4"></path></svg> -->
//              <img src="https://images.ygoprodeck.com/images/cards/73580471.jpg" alt="Black rose dragon" class="h-full w-full " >
//             <span class="absolute left-3 top-2 font-mono text-sm text-muted">#001</span>
//           </div>
//           <div class="flex items-center justify-between gap-2">
//             <h3 class="font-display text-xl font-semibold">Black Rose Dragon</h3>
//             <span class="rounded-full bg-attr-fire px-3 py-1 text-sm font-bold text-ink">Fire</span>
//           </div>
//           <p class="text-sm text-muted">Base · Total 309</p>
//           <button type="button" class="btn-outline mt-auto hover:bg-gold-metal hover:border-0">Ajouter à l'équipe</button>
//         </article>



// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------




  



// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------

