"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchGuideLines = fetchGuideLines;
exports.fetchTeamMembers = fetchTeamMembers;

function fetchGuideLines() {
  var response, data;
  return regeneratorRuntime.async(function fetchGuideLines$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('~/public/guideLines.json'));

        case 3:
          response = _context.sent;

          if (response.ok) {
            _context.next = 6;
            break;
          }

          throw new Error('Failed to fetch guideLines');

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching guideLines:', _context.t0);
          throw _context.t0;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function fetchTeamMembers() {
  var response, data;
  return regeneratorRuntime.async(function fetchTeamMembers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch('~/public/teamMembers.json'));

        case 3:
          response = _context2.sent;

          if (response.ok) {
            _context2.next = 6;
            break;
          }

          throw new Error('Failed to fetch teamMembers');

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error('Error fetching teamMembers:', _context2.t0);
          throw _context2.t0;

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
}