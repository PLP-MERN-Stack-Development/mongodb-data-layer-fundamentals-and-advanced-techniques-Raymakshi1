use("plp_bookstore");

db.books.insertMany([
  { title: "The Coffee Art", author: "Ray Makachia", genre: "Non-Fiction", published_year: 2020, price: 1500, in_stock: true, pages: 220, publisher: "Brew House" },
  { title: "The Barista's Code", author: "John Barrow", genre: "Education", published_year: 2018, price: 1200, in_stock: true, pages: 180, publisher: "Café Press" },
  { title: "Espresso Dreams", author: "Jane Doe", genre: "Romance", published_year: 2021, price: 1000, in_stock: false, pages: 310, publisher: "Love Beans" },
  { title: "Brew Mastery", author: "Carlos Kim", genre: "Non-Fiction", published_year: 2019, price: 1300, in_stock: true, pages: 250, publisher: "CafeBooks" },
  { title: "Dark Roast Tales", author: "Mia Santos", genre: "Thriller", published_year: 2015, price: 1100, in_stock: true, pages: 280, publisher: "Mystery Brew" },
  { title: "Latte Lovers", author: "Sara Blake", genre: "Romance", published_year: 2022, price: 950, in_stock: true, pages: 240, publisher: "Heart Beans" },
  { title: "Caffeine Chronicles", author: "John Barrow", genre: "Adventure", published_year: 2011, price: 1700, in_stock: false, pages: 330, publisher: "BrewBooks" },
  { title: "Kenyan Coffee Legacy", author: "Ray Makachia", genre: "History", published_year: 2023, price: 2000, in_stock: true, pages: 280, publisher: "African Roots" },
  { title: "The Java Story", author: "Nina Patel", genre: "Education", published_year: 2017, price: 1250, in_stock: true, pages: 200, publisher: "Café Learn" },
  { title: "The Morning Cup", author: "Tariq Ali", genre: "Motivational", published_year: 2016, price: 1050, in_stock: true, pages: 190, publisher: "RisePress" }
]);
