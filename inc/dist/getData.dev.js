"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getData;

function getData(srtingAPISection) {
  var response;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("api/".concat(srtingAPISection)));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.json());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}