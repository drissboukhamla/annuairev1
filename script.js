const providers = [
  {
    name: "JMR Ranaivoson",
    category: "photographe",
    description: "Photographe Videaste  de mariage professionnel",
    website: "https://www.jmranaivoson.com/"
  },
  {
    name: "Regard Neuf Films",
    category: "photographe",
    description: "Photographe Videaste  de mariage ",
    website: "https://www.facebook.com/Regardneuf13/"
  },
  {
    name: "dj djaal",
    category: "DJ",
    description: "DJ Afro-Oriental, ambiance festive et multiculturelle pour un mariage inoubliable.",
    website: "https://www.instagram.com/dj_djaal/"
  },
  {
    name: "DjGosta",
    category: "DJ",
    description: " DJ de mariage professionnel, je crée une ambiance musicale sur mesure pour faire danser vos invités et sublimer chaque moment de votre réception.",
    website: "https://www.mariages.net/musique-mariage/dj-gosta-animations--e112188"
  },
  {
    name: "Amine Photographe",
    category: "photographe",
    description: "Mariage/Événements/Famille Scénographie",
    website: "https://www.instagram.com/amine_photographe_mariage_"
   },
  {
    name: "Hatim Cameraman",
    category: "photographe",
    description: "Cameraman de mariage, je réalise des films élégants et émouvants pour revivre votre plus beau jour.",
    website: "https://www.facebook.com/hatim.alili/?locale=fr_FR"
  },
  {
    name: "Warren Sax",
    category: "DJ",
    description: "Un artiste d'exception, capable de vous faire rêver et d'immortaliser votre événement",
    website: "https://www.warren-sax.fr/"
  },
  {
    name: "Photobooth marseillais ",
    category: "photographe",
    description: "Découvrez le Photobooth Marseillais !  Un Photomaton Mobile, Ultra Fun et surtout incontournable pour que chacun reparte avec un souvenir unique de votre événement !",
    website: "https://lephotoboothmarseillais.fr/"
  },
  {
    name: "Mister Photobooth",
    category: "photographe",
    description: "Nous sommes une entreprise spécialisée dans la location de photobooth pour tous types d'événements, tels que les mariages, les fiançailles, les baby showers",
    website: "https://misterphotobooth.fr/"
  },
  {
    name: "Florida palace ",
    category: "Lieu",
    description: "Situé à Marseille, le Florida Palace vous propose d'organiser une réception de mariage à votre image dans un cadre prestigieux qui fera de votre mariage une célébration inoubliable",
    website: "https://www.mariages.net/salle-mariage/florida-palace--e28573?cmp=ADW-SEM-PMAX-VENUES&utm_source=google&utm_medium=paid-search&utm_campaign=VENUES-Pmax-B2C-Marketplace&utm_content=performance_cpm_search-ad_na_na&gclid=CjwKCAiAkbbMBhB2EiwANbxtbZdJ0OFQiZzCfZol423j1ZuOssEV7sgm-uQbkV3sLi43sRzcjdm0JxoCzdMQAvD_BwE"
  },
  {
    name: "Le Buz",
    category: "Lieu",
    description: "Offrez-vous un mariage de prestige dans un décor moderne et design pour votre plus grand plaisir. Le Buz vous accueille à la Valentine à deux pas du Château de la Buzine pour une réception de mariage des plus festives dans un cadre idyllique.",
    website: "https://www.mariages.net/salle-mariage/le-buz--e133244"
  },
   {
    name: "Le Domaine des Calanques",
    category: "Lieu",
    description: "Niché aux portes de Cassis, à Marseille, ce lieu d’exception offre un cadre idéal pour organiser vos réceptions, qu’elles soient privées ou professionnelles. ",
    website: "https://www.mariages.net/salle-mariage/le-domaine-des-calanques--e392739"
      },
  {
    name: "Camélia Palace",
    category: "Lieu",
    description: "Pour que votre mariage soit une réussite totale et se déroule dans un cadre qui vous garantit joie et convivialité, faites confiance à Camélia Palace. Cette salle accueillante et chaleureuse fera de votre banquet un moment véritablement magique pour vous et tous vos proches. ",
    website: "https://www.mariages.net/salle-mariage/camelia-palace--e139150"
      },
  {
    name: "Espace Arena",
    category: "Lieu",
    description: "Futurs mariés, bienvenus à l’Espace Arena ! Ce lieu de réception enchanteur et spacieux est parfait pour une célébration de grande envergure tel que votre mariage ! Les propriétaires avenants et disponibles vous attendent avec impatience pour mettre en place votre plus belle fête. N’attendez plus, venez les rencontrer ! ",
    website: "https://www.mariages.net/salle-mariage/espace-arena--e280676"
      },
  {
    name: "Mina Kouk",
    category: "traiteur",
    description: "Faites de votre mariage une journée inoubliable avec l'expertise de Mina Kouk Traiteur à Marseille. ",
    website: "https://www.mariages.net/traiteur-mariage/mina-kouk--e145497"
      },
];

const container = document.getElementById("providers");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProviders(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p><strong>Catégorie :</strong> ${p.category}</p>
        <p>${p.description}</p>
        <a href="${p.website}" target="_blank" class="website-link">
          Visiter le site
        </a>
      </div>
    `;
  });
}

function filterProviders() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = providers.filter(p =>
    (category === "all" || p.category === category) &&
    p.name.toLowerCase().includes(search)
  );

  displayProviders(filtered);
}

searchInput.addEventListener("input", filterProviders);
categoryFilter.addEventListener("change", filterProviders);

displayProviders(providers);
