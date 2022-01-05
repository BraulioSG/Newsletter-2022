let newVisitor = false;
let date = document.title.split(' ');
date.shift();

const DATE = date.join('').toLowerCase();

if (typeof(Storage) !== "undefined") {
    if (localStorage.dates) {
        let dates = localStorage.dates.split(',');
        if (dates.indexOf(DATE) < 0){
            localStorage.dates += `,${DATE}`;
            newVisitor = true;
        }

    } else {
        newVisitor = true;
        localStorage.dates = DATE;
    }

}

const VALUES = {
    URL : 'https://api.countapi.xyz',
    PARAMS : [DATE, 'newsletter']
}