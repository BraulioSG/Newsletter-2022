/*create api counter
https://api.countapi.xyz/create?namespace=sitename&key=key&value=1
*/

let visitors = 0;

const URL = VALUES['URL'];
const NAMESPACE = VALUES['PARAMS'][0];
const KEY = VALUES['PARAMS'][1];

const COUNTER = document.getElementById('visitors');

console.log(`${URL}/get/${NAMESPACE}/${KEY}/`);
console.log(`${URL}/update/${NAMESPACE}/${KEY}/?amount=1`);

try{
    fetch(`${URL}/get/${NAMESPACE}/${KEY}/`)
    .then(res => res.json())
    .then(res => {
        if(res.value == null){
            fetch(`${URL}/create?namespace=${NAMESPACE}&key=${KEY}&value=1`)
            .then(res => res.json())
            .then(res => console.log(res.value));
        }
    });
}
catch{}

function getVisits(){
	fetch(`${URL}/get/${NAMESPACE}/${KEY}/`)
	.then(res => res.json())
	.then(data => {
		COUNTER.innerHTML = data.value;
	});
}

function addVisits(){
	fetch(`${URL}/update/${NAMESPACE}/${KEY}/?amount=1`)
	.then(res => res.json())
	.then(data => {
		COUNTER.innerHTML = data.value;
	});
}


window.onload = () => {
	if(newVisitor){
        addVisits();
    }
    else {
        getVisits();
    }
}