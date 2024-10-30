// 1 Задание

class Album {
    constructor(title, artist, year) {
      this.title = title;
      this.artist = artist;
      this.year = year;
    }
  }
  
  class MusicCollection {
    constructor() {
      this.albums = [];
    }
  
    addAlbum(album) {
      this.albums.push(album);
    }
  
    *[Symbol.iterator]() {
      for (const album of this.albums) {
        yield album;
      }
    }
  }
  
  const musicCollection = new MusicCollection();
  
  musicCollection.addAlbum(new Album('мосты горят', 'гнилаялирика', 2021));
  musicCollection.addAlbum(new Album('байполар', 'Три Дня Дождя', 2022));
  musicCollection.addAlbum(new Album('12 шагов', 'балкон ожиданий', 2023));
  
  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }

//   2 задание

class Dish {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Chef {
    constructor(name, specialty) {
      this.name = name;
      this.specialty = specialty;
    }
  }
  
  class Client {
    constructor(id, dishes) {
      this.id = id;
      this.dishes = dishes;
    }
  }
  
  const viktor = new Chef('Виктор', 'Пицца');
  const olga = new Chef('Ольга', 'Суши');
  const dmitry = new Chef('Дмитрий', 'Десерты');
  
  const dishMap = new Map([
    ['Пицца "Маргарита"', viktor],
    ['Пицца "Пепперони"', viktor],
    ['Суши "Филадельфия"', olga],
    ['Суши "Калифорния"', olga],
    ['Тирамису', dmitry],
    ['Чизкейк', dmitry]
  ]);

  const clients = new Map([
    { id: 'Алексей', dishes: ['Пицца "Пепперони"', 'Тирамису'] },
    { id: 'Мария', dishes: ['Суши "Калифорния"', 'Пицца "Маргарита"'] },
    { id: 'Ирина', dishes: ['Чизкейк'] }
  ]);
  

  for (const client of clients) {
    console.log(`${client.id}: заказал(а)`);
    if (client.dishes && Array.isArray(client.dishes)) {
      for (const dish of client.dishes) {
        const chef = dishMap.get(dish);
        console.log(` - ${dish} (приготовил повар ${chef.name})`);
      }
    } else {
      console.log('У клиента нет заказанных блюд');
    }
    console.log('');
  }
