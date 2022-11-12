const router = require("express").Router();
const { books, genres, categories, reviews, users } = require("./mock");
const { reply, getById, getByCategory, getReviewsByBook } = require("./utils");

router.get("/books", (req, res, next) => {
  const { category, id } = req.query
    let needBooks = []
  if (category != undefined) {
    needBooks = getByCategory(books)(Number(category))
  } else if (id != undefined) {
    needBooks = [getById(books)(Number(id))]
  }
  reply(res, needBooks);
});

router.get("/books/ids", (req, res, next) => {
  const params = req.query
  const needBooks = []
  for (let i in params) {
    needBooks.push(getById(books)(Number(params[i])))
  } 
  reply(res, needBooks);
});

router.get("/categories", (req, res, next) => {
  reply(res, categories)
})

router.get("/reviews", (req, res, next) => {
  const needBook = Number(req.query.bookId)
  let needReviews = getReviewsByBook(reviews)(getById(books)(needBook).reviews)
  console.log(needBook)
  reply(res, needReviews)
})

// router.get("/films", (req, res, next) => {
//   const { cinemaId, filmId } = req.query;
//   let result = films;

//   if (cinemaId) {
//     const cinema = getById(cinemas)(cinemaId);
//     if (cinema) {
//       result = cinema.films.map(getById(result));
//     }
//   }

//   if (!cinemaId && filmId) {
//     result = getById(result)(filmId);
//   }
//   reply(res, result);
// });

// router.get("/reviews", (req, res, next) => {
//   const { id } = req.query;
//   let result = reviews;
//   if (id) {
//     const cinema = getById(cinemas)(id);
//     if (cinema) {
//       result = cinema.reviews.map(getById(result));
//     }
//   }
//   reply(res, result);
// });

// router.get("/users", (req, res, next) => {
//   reply(res, users);
// });

module.exports = router;
