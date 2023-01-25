"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_1 = require("./animal");
class Cachorro extends animal_1.Animal {
    Latir() {
        return console.log("au au au");
    }
}
exports.Cachorro = Cachorro;
