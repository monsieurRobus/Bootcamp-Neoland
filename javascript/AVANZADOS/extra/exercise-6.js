// Peter? o Hello Peter?

const user = { name: "Peter", surname: "Parker" };

function a(user) {
    const nama = b(user.name);
    console.log(nama);
}

function b(name) {
    return "Hello " + name;   
}

a(user);