import { Command } from "commander";
import os from "os";
const program = new Command();

// initializing the project with the different options
program
    .version("1.0.0")
    .description("simple random secure password generator")
    .option("-l , --length <number>", "length of password", "8")
    .option("-nn , --no-numbers", "password to not include numbers")
    .option("-ns , --no-symbols", "password to not include symbols")
    .parse();

    // this function creates the password default
const { length, save, numbers, symbols } = program.opts();
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const integers = "0123456789";
const exCharacters = "!@#$%^&*_-=+";
export const createPassword = (length, hasNumbers, hasSymbols) => {
    let chars = alpha;
    if (hasNumbers) {
        chars += integers;
    }
    if (hasSymbols) {
        chars += exCharacters;
    }
    return generatePassword(length, chars);
};

// this function formats our password to however you need
const generatePassword = (length, chars) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};