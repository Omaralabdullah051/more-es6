const fish = { id: 58, name: 'king hilsha', price: 9000, phone: '01717555555', address: 'chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

console.log(phone, price, id);
console.log(phone, price, dress);
console.log(phone);
// nested Object 
const company = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development', employee: 22, framework: 'react',
        tech: { first: 'html', second: 'css', third: 'js' }
    }
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food, second, third);

const cricketTeam = {
    firstperson: { name: 'alim', age: 26, carrier: '8 years' },
    secondperson: { name: 'bodda', age: 22, carries: '4 years' },
    thirdperson: {
        performance: { cricket: 'good', common: 'batsman' },
        performance2: { football: 'best', common: 'gk' }
    }
}
const { football } = cricketTeam.thirdperson.performance2;
console.log(football);