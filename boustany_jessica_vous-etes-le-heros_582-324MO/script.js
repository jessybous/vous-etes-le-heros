let chaptersObj = {
  resetPage: {
    subtitle: "La porte mystérieuse",
    text: "Luka, une jeune personne non-binaire se promenait dans une forêt pour prendre l'air, à minuit. Juste avant cela, Luka se trouvait à deux feux de camp avec ses amis. Au bout d'une trentaine de minutes de marche, Luka Appercois une maison entourait d'arbres. cette maison   avait une porte rouge flamboyant, ce qui était très bizarre pour une maison en plein milieu d'une forêt. Curieux, il se demande s'il devrait ouvrir la porte, ou faire demi tour. Quel choix devrait-il faire?",
    img: "porte.png",
    options: [
      { optionText: "ouvrir la porte", action: "goToChapter('open')" },
      { optionText: "Ne pas ouvrir", action: "goToChapter('dontOpen')" },
    ],
  },

  open: {
    subtitle: "Le délire",
    text: "Luka se dirige vers la fameuse porte. À son contact, un frisson parcourt son corps et glace son sang. Au bout de quelques secondes d’hésitation, il fini par ouvrir la porte et rentrer dans la maison abandonnée. Au bout de quelques pas à l’intérieur de la maison, la porte claque derrière lui, le faisant sursauter. Il regarde autour de lui et se rend compte d’une soudaine odeur de pourriture. Il ignore l’odeur, se disant que c’était tout simplement dû à la vieillesse de la maison. Luka plisse les yeux pour essayer de voir quelque chose dans cette baraque, mais tout était trop sombre. Il sort la lampe de son téléphone pour mieux voir, mais sa vision était double. Plus les secondes passaient, plus il était étourdi, et il finit par s’évanouir. Lors de son réveil, Luka entend des bruits étranges, un peu comme des cliquettements de monstre. Malheureusement, il était dans le noir totale et ne pouvait pas voir la source de l’objet. Doit-il se diriger vers les bruits, ou rester sur place?",
    img: "foret-bleu-sombre.png",
    options: [
      { optionText: "Ressortir", action: "goToChapter('sortir')" },
      { optionText: "Aller vers le bruit", action: "goToChapter('goToNoise')" },
      { optionText: "Attendre", action: "goToChapter('wait')" },
    ],
  },
  dontOpen: {
    subtitle: "GameOver",
    text: "Luka decide de faire demi-tour. Soudainement, il se fait attaquer par des loup et meurt.",
    img: "foret-bleu-sombre.png",
    options: [
      { optionText: "Recommencer", action: "goToChapter('resetPage')" },
    ],
  },

  sortir: {
    subtitle: "GameOver",
    text: "Luka decide de sortir par la porte. Soudainement, il se fait attaquer par des loup et meurt.",
    img: "foret-bleu-sombre.png",
    options: [
      { optionText: "Recommencer", action: "goToChapter('resetPage')" },
    ],
  },

  goToNoise: {
    subtitle: "GameOver",
    text: "Luka décide de se lever et marcher vers les bruits. Malheureusement, la créature lui saute dessus et le tue. Vous avez récupérer un bout de vitre pointu.",
    img: "foret-yeux.png",
    video: "gif_zombie.mp4",
    options: [
      { optionText: "Recommencer", action: "goToChapter('resetPage')" },
    ],
  },
  wait: {
    subtitle: "L'affrontement",
    text: "Luka décide de ne rien tempêter et d’attendre. Plus le temps passe, plus les bruits se rapproche. La créature était tellement proche de lui qu’il arrêta de respirer. Au bout de 10 secondes, le silence était complet. Luka regarde autour de lui pour essayer de voir quelque-chose mais en vain. Soudain, quelque chose d’énorme saute sur lui et lui hurle dessus, ce qui fait Luka hurler de peur il essaie de se débattre, mais la créature le tient fermement. C’était lui ou la créature. Devrait-il se défendre?",
    img: "foret-yeux.png",
    options: [
      { optionText: "se défendre", action: "impact()" },
      { optionText: "chercher une arme", action: "impact()" },
    ],
  },

  death: {
    subtitle: "GameOver",
    text: "Malheureusement, la créature fini par le dévorer, car il n'a pas pu se défendre. Vous avez récupérer un bout de vitre pointu qui vous sera utile plus tard.",
    img: "foret-yeux.png",
    options: [{ optionText: "Recommencer", action: "etat()" }],
  },

  glass: {
    subtitle: "vie ou mort",
    text: "Lorsqu’il tape à coter de lui, il sentit un objet lisse et pointu. Il l’attrape et poignarde la créature. Devrait-il essayer de bouger la chose et s’enfuir?",
    img: "foret-bleu.png",
    options: [
      { optionText: "S'enfuire", action: "goToChapter('run')" },
      { optionText: "rester", action: "goToChapter('hemoragie')" },
    ],
  },
  run: {
    subtitle: "Le lac enchanté",
    text: "Luka dégage la créature et se met à courir comme il n’a jamais couru dans sa vie. Il bouscule quelque chose qui ressemble à des escaliers et monte. Il voit au loin la forme d’une porte créer par la lumière provenant d’en dehors de la maison. Il défonce la porte, mais a sa surprise, il ne retrouve pas le foret qu’il attendait de voir. Autour de lui se trouvait des choses inexplicables. Des créatures de toutes sortes, des arbres déformés, etc. tout autour de lui bougeaient, et il sentit une soudaine envie de vomir. Les bruits de la créature se rapprochait de lui et il se remit à courir. Au bout d’une course de 20 minutes, Luka trébuche dans quelque chose qui ressemble à un lac. Il sort de l’eau pour respirer et soudainement tout devient plus clair autour de lui. Les arbres arrêtent de bouger, les créatures disparaissent et tout pris la forme de la forêt de ses souvenirs. Les bruits de monstres se transforma en la voix de ses amis qui l’appellent au loin. Après une enquête policière, la vérité sur ce qui s’est passé éclate. Dans la maison se trouvait un gaz hallucinogène propager dans la maison pas les membres d’un culte, qui ont pris Luka en hottage pour le sacrifier dans un rituel.",
    img: "foret-homme.png",
    video: "gif_run.mp4",
    options: [
      { optionText: "Recommencer", action: "goToChapter('resetPage')" },
    ],
  },
  hemoragie: {
    subtitle: "GameOver",
    text: "la créature est trop lourde pour vous. plus le temps passe plus Luka a une sensation de brûlure dans ses poumons et fini par mourir d'une hémoragie",
    img: "foret-yeux.png",
    options: [
      { optionText: "Recommencer", action: "goToChapter('resetPage')" },
    ],
  },
};

let audio = new Audio("assets/woosh.mp3")
function goToChapter(chapterName) {

  localStorage.setItem("name",chapterName);

  
  audio.play()


  console.log(chaptersObj[chapterName]["subtitle"]);
  console.log(chaptersObj[chapterName]["text"]);
  document.querySelector(".chapitre").innerHTML =chaptersObj[chapterName]["subtitle"];
  document.querySelector(".text").innerHTML = chaptersObj[chapterName]["text"];
  document.querySelector(".option").innerHTML = "";


  for (i in chaptersObj[chapterName].options) {
    const newButton = document.createElement("button");
    newButton.setAttribute(
      "onclick",
      chaptersObj[chapterName].options[i].action
    );
    newButton.setAttribute("class", "bouton");
    const buttonText = document.createTextNode(
      chaptersObj[chapterName].options[i].optionText
    );
    newButton.appendChild(buttonText);
    const parent = document.querySelector(".option");
    parent.appendChild(newButton);
  }

  if(chaptersObj[chapterName]["video"]){
    document.querySelector(".image").innerHTML = `<video src="assets/`+ chaptersObj[chapterName]['video']+`" loop muted autoplay></video>`;
  }else{
    document.querySelector(".image").innerHTML = `<img src="assets/`+ chaptersObj[chapterName]['img']+`">`;
  }
}
/*function startGame(){
  goToChapter("resetPage");
}

startGame()

localStorage.setItem("glass",false);
let glassfound = Boolean("glass");

function etat() {
  localStorage.setItem("glass",true);
  glassfound =Boolean("glass");
  goToChapter("resetPage");
}

function impact() {
  if (glassfound == true) {
    goToChapter("glass");
  } else {
    goToChapter("death");
  }
}

let chapter =localStorage.getItem("name")*/
function gotofirst() {
  console.log(goToChapter('intro'));
}


let glassfound = localStorage.setItem("glass",false);

let chapter = localStorage.getItem("name");
function startGame(){
  if(chapter !== "resetPage"){
    goToChapter(chapter)
  }else{
    goToChapter("death")
  }
}

function etat() {
  localStorage.setItem("glass","true")
  goToChapter("resetPage");
  
}

function impact() {
  glassfound = localStorage.getItem("glass")
  if(glassfound=="true"){
    goToChapter("glass")
    localStorage.clear();
  }else{
  goToChapter("death");
}
}

startGame();
