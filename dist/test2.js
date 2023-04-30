"use strict";
let myNumber;
myNumber = 5;
// myNumber = 'hello'
const getNumMulti3 = (num) => {
    return num * 3;
};
var EAdminMails;
(function (EAdminMails) {
    EAdminMails["ADMIN1"] = "admin1@gmail.com";
    EAdminMails["ADMIN2"] = "admin2@gmail.com";
    EAdminMails["ADMIN3"] = "admin3@gmail.com";
})(EAdminMails || (EAdminMails = {}));
var EErrorMEssages;
(function (EErrorMEssages) {
    EErrorMEssages[EErrorMEssages["WRONG_PINCODE"] = 0] = "WRONG_PINCODE";
    EErrorMEssages[EErrorMEssages["WRONG_PASSWORD"] = 1] = "WRONG_PASSWORD";
})(EErrorMEssages || (EErrorMEssages = {}));
const user1 = {
    name: "valeria",
    age: 25
};
const user2 = {
    name: "victor",
    age: 25
};
const users = [user1, user2];
