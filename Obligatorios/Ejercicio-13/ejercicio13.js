const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
];
console.log("Usuarios: ", users);

let nonPremium = [];
for (let usuario of users) {
    if (usuario.premium == true) {
        console.log(`El usuario ${usuario.username} con ${usuario.age} años es un usuario premium`);
    }
    else {
        nonPremium.push(usuario);
    }
};
console.log("Usuarios que no son premium: ", nonPremium);