onmessage = function (e) {

  if (e.data == "GO") {

    console.log('Worker: Message received from main script');
    creer_coords();


    function creer_coords() {

      postMessage([getRandomInt(400),getRandomInt(400)]);

      /*
        clearInterval(retour);
      */


    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let retour = setInterval(creer_coords,getRandomInt(5000)); //Appelle creer coords en boucle avec des durées variables



  }
}