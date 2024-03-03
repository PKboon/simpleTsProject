import { Person } from "./Person";

export class Tenant extends Person {
    private _roomType:string = "";
    private _desiredAnimalNumber = 0;

    constructor(name:string, room_type:string, desiredAnimalNumber:number) {
        super(name);
        this._roomType = room_type;
        this._desiredAnimalNumber = desiredAnimalNumber;
    }

    public requestToStaff(staffName:string):void {
        console.log(`${super.name}: Hi ${staffName}, can I have ${this._desiredAnimalNumber} pet(s) in my apartments?`);
    }

    public reactionToStaff(answer:boolean):void {
        console.log(`${super.name}: ${answer ? "Yay! Thanks a lot :)" : "That's too bad :("}`);
    }

    get roomType():string { return this._roomType; }
    set roomType(value:string) { this._roomType = value; }
    get desiredAnimalNumber():number { return this._desiredAnimalNumber; }
    set desiredAnimalNumber(value:number) { this._desiredAnimalNumber = value; }
}