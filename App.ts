import { Tenant } from "./Tenant";
import { Staff } from "./Staff";

const tenant1 = new Tenant('Jane Doe', 'studio', 2);
const tenant2 = new Tenant('Sarah Smith', '1 bed', 1);
const tenant3 = new Tenant('James Bond', '2 bed', 1);
const tenant4 = new Tenant('Nick Della', '3 bed', 5);
const staff = new Staff('Max Stu');

const tenants:Tenant[] = [tenant1, tenant2, tenant3, tenant4];
var staffReponse = false;

for(let index in tenants) {
    console.log(`\nTenant ${Number(index) + 1}`);
    tenants[index].requestToStaff(staff.name);
    staffReponse = staff.responseToTenant(tenants[index].name, tenants[index].roomType, tenants[index].desiredAnimalNumber);
    tenants[index].reactionToStaff(staffReponse);
    console.log("\n----------------------");
}