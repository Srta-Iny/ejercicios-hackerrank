// variable
var time;
// se selecciona am/pm  y se pone en min 
var hora = time.toLowerCase().slice(-2);
//arreglo para separar por  hora; min; seg; am/pm
var hArray =time.split(':');
hArray[3] = nhArray[2].slice(2);
hArray[2] = nhArray[2].slice(0,2);

// comparar si es pm o am
if(hora === 'pm'){
	if(nhArray[0] <'12'){
    	console.log(parseFloat(nhArray[0])+12+":"+nhArray[1]+":"+nhArray[2]);
    }else{
    	console.log(nhArray[0]+":"+nhArray[1]+":"+nhArray[2]); 
    }
}else{
	if(nhArray[0] === '12'){
    	console.log("00:"+nhArray[1]+":"+nhArray[2]);
    }else{
		console.log(nhArray[0]+":"+nhArray[1]+":"+nhArray[2]);
    }
}
