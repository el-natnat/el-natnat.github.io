

if (window.Worker) {

	const myWorker = new Worker("worker.js");
	myWorker.postMessage("GO");
	console.log('Message posted to worker');
	/*
		clearInterval(retour);
	*/ 
	myWorker.onmessage = function(e) {
		
		console.log('Coords reçues'+e.data);
	}	    
		
	
	


	
} else {
	console.log('Your browser doesn\'t support web workers.')
}