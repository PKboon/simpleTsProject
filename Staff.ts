import { Person } from './Person';

export class Staff extends Person {
    readonly rules:{numOfBed:number, roomType:string, numOfPets:number}[] = [
        {numOfBed:0, roomType:'studio', numOfPets:0},
        {numOfBed:1, roomType:'1 bed',  numOfPets:1},
        {numOfBed:2, roomType:'2 bed', numOfPets:2},
        {numOfBed:3, roomType:'3 bed', numOfPets:4},
    ];

    constructor(name:string) {
        super(name);
    }

    public responseToTenant(name:string, roomType:string, desiredAnimalNumber:number):boolean {
        let matchRule = this.rules.filter(item =>item.roomType === roomType)[0];

        if(desiredAnimalNumber > matchRule.numOfPets) {
            if(matchRule.numOfBed === 0) {
                console.log(`${super.name}: Sorry ${name}. We don't allow pets in a ${matchRule.roomType}.`);
            } else {
                console.log(`${super.name}: Sorry ${name}. Your room is a ${matchRule.roomType}. Therefore, you are allow to have ${matchRule.numOfPets} pet(s).`);
            }
            return false;
        } else if (matchRule.numOfPets > desiredAnimalNumber) {
            console.log(`${super.name}: Of course ${name}! Your room is a ${matchRule.roomType}. You can have up to ${matchRule.numOfPets} pet(s). So, ${matchRule.numOfPets - desiredAnimalNumber} more!`);
            return true;
        } else {
            console.log(`${super.name}: Of course ${name}! We allow exactly ${matchRule.numOfPets} pet(s) in a ${matchRule.roomType}.`);
            return true;
        }
    }
}