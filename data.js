var faker = require('faker');

function generateData() {
    var users = [];
    for (var id = 0; id < 24; id++) {
        let name = faker.hacker.noun();
        let price = faker.random.number({ min: 10, max: 100 });
        let image = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
        users.push({
            "id": id,
            "name": name,
            "price": price,
            "image": image[Math.floor(Math.random() * Math.floor(image.length))],
        });
    }

    return { users };
}

module.exports = generateData;