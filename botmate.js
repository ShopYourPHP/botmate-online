#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_1 = require("fs");
const main_1 = require("./main");
const prompts = require("prompts");
commander_1.program.command('init').action(async () => {
    const cwd = process.cwd();
    if (!(0, fs_1.existsSync)(cwd + '/.env')) {
        console.log('No environment file found. Creating one...');
        const response = await prompts([
            {
                type: 'text',
                name: 'DB_HOST',
                message: 'Enter database host',
            },
            {
                type: 'number',
                name: 'DB_PORT',
                message: 'Enter database port',
                initial: 5432,
            },
            {
                type: 'text',
                name: 'DB_NAME',
                message: 'Enter database name',
            },
            {
                type: 'text',
                name: 'DB_USERNAME',
                message: 'Enter database username',
            },
            {
                type: 'text',
                name: 'DB_PASSWORD',
                message: 'Enter database password',
                mask: '*',
            },
        ]);
        let env = '';
        for (const key of Object.keys(response)) {
            env += `${key}=${response[key]}\n`;
        }
        (0, fs_1.writeFileSync)(cwd + '/.env', env);
    }
    (0, main_1.startServer)();
});
let version = 'undefined';
if ((0, fs_1.existsSync)(`${__dirname}/package.json`)) {
    const packageJson = JSON.parse((0, fs_1.readFileSync)(`${__dirname}/package.json`, 'utf8'));
    version = packageJson.version;
}
commander_1.program.version(version);
commander_1.program.parse();
//# sourceMappingURL=botmate.js.map