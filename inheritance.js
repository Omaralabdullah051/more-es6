class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember {
    groupSupportTime;
    designation = 'support web dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    statSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'care web dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'neptune app dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app for', version);
    }
}


const amir = new Support('Amir khan', 'BD', 11);
const salman = new Support('solaiman khan', 'UAE', 9);
const shahrukh = new Support('srk khan', 'UAE', 10);
const akshay = new Support('akshay kumar', 'UAE', 8);
console.log(amir, salman, shahrukh, akshay);
console.log(salman);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);

const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
console.log(ash.name);
ash.releaseApp('1.4.5');
