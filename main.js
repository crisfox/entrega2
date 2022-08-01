const Container = require("./Container");

async function main() {
    const container = new Container("productos.txt");
    const list = await container.getAll();
    console.log(list);
    console.log(`Actualmente hay ${list.length} productos.`);

    const productOne = {
        title: "Mate",
        price: 250,
        thumbnail: "https://image.com/product-one"
    }

    console.log(`${productOne.title} con id ${await container.save(productOne)}`);

    const productTwo = {
        title: "Tornillo",
        price: 10.25,
        thumbnail: "https://image.com/product-two"
    }

    console.log(`${productTwo.title} con id ${await container.save(productTwo)}`);

    const productThree = {
        title: "Televisor LCD",
        price: 499999,
        thumbnail: "https://image.com/product-three"
    }

    console.log(`${productThree.title} con id ${await container.save(productThree)}`);

    const listUpdate = await container.getAll();
    console.log(`Actualmente hay ${listUpdate.length} productos.`);
    console.log(listUpdate);

    await container.deleteById(2);

    const listUpdateAfterDeleteId = await container.getAll();
    console.log(`Actualmente hay ${listUpdateAfterDeleteId.length} productos.`);
    console.log(listUpdateAfterDeleteId);

    console.log(await container.getById(1));

    await container.deleteAll();
    const listUpdateAfterDeleteAll = await container.getAll();
    console.log(`Actualmente hay ${listUpdateAfterDeleteAll.length} productos.`);
    console.log(listUpdateAfterDeleteAll);

}

main();
