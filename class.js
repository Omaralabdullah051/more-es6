class Support {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    statSession() {
        console.log(this.name, 'start a support session');
    }
}
const amir = new Support('Amir khan', 'BD');
const salman = new Support('solaiman khan', 'UAE');
const shahrukh = new Support('srk khan', 'UAE');
const akshay = new Support('akshay kumar', 'UAE');
console.log(amir, salman, shahrukh, akshay);
// console.log(salman);
amir.statSession();
salman.statSession();