const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

const getById = (entities) => (id) =>
  entities.find((entity) => entity.id === id);

const getByCategory = (entities) => (cat) =>
  entities.filter((entity) => entity.category === cat);

const getReviewsByBook = (reviews) => (ids) => 
  reviews.filter((review) => ids.includes(review.id))

module.exports = { reply, getById, getByCategory, getReviewsByBook };
