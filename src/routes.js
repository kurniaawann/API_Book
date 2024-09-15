const {
  getAllBookshandler,
  addBooksHandler,
  getBooksById,
  editBooksByIdHandler,
  deleteBooksByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBooksHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookshandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBooksById,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBooksByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBooksByIdHandler,
  },
];
module.exports = routes;
