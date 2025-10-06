// Find all books in a specific genre
db.books.find({ genre: "Romance" }).pretty();

// Find books published after a certain year
db.books.find({ year: { $gt: 2015 } }).pretty();

// Find books by a particular author
db.books.find({ author: "John Doe" }).pretty();

// Count total books in the collection
db.books.countDocuments();

// Sort books by year (descending)
db.books.find().sort({ year: -1 }).pretty();
