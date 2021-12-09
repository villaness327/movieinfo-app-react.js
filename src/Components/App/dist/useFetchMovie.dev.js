"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFetchMovie = useFetchMovie;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useFetchMovie() {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      searchValue = _React$useState2[0],
      setSearchValue = _React$useState2[1]; //Estado de Busqueda


  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      results = _React$useState4[0],
      setResults = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1]; //Estado que guarda el error


  var _React$useState7 = _react["default"].useState([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      movie = _React$useState8[0],
      setMovie = _React$useState8[1]; //Estado que guarda los resultados


  var fetchAPI = function fetchAPI(searchValue) {
    var url, response, data;
    return regeneratorRuntime.async(function fetchAPI$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://www.omdbapi.com/?s=".concat(searchValue, "&type=movie&apikey=74d6303e");
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch(url));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context.sent;

            //Se convierte a JSON              
            if (data.Search) {
              setMovie(data.Search);
              setResults(true);
            }

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            setError(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 11]]);
  };

  _react["default"].useEffect(function () {
    //use Effect se ejecuta cada vez que el estado searchValue cambia               
    fetchAPI(searchValue);
    console.log(searchValue);
  }, [searchValue]);

  return {
    //Este custom hook retorna las propiedades para componente App
    searchValue: searchValue,
    results: results,
    error: error,
    setSearchValue: setSearchValue,
    movie: movie
  };
}