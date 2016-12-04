webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BasicNavbar = __webpack_require__(180);

	var _BasicNavbar2 = _interopRequireDefault(_BasicNavbar);

	var _home = __webpack_require__(181);

	var _home2 = _interopRequireDefault(_home);

	var _about = __webpack_require__(182);

	var _about2 = _interopRequireDefault(_about);

	var _contact = __webpack_require__(183);

	var _contact2 = _interopRequireDefault(_contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var pg = pageData;

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	        _this.state = {
	            selectedPage: pg.page || "home"
	        };
	        return _this;
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var selectedPage = this.state.selectedPage;

	            switch (selectedPage) {
	                case 'contact':
	                    var page = _react2.default.createElement(_contact2.default, null);
	                    break;
	                case 'about':
	                    var page = _react2.default.createElement(_about2.default, null);
	                    break;
	                default:
	                    var page = _react2.default.createElement(_home2.default, null);
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'mainContainer' },
	                _react2.default.createElement(_BasicNavbar2.default, null),
	                page
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	if (self.fetch) {} else {
	    console.log('Unsupported browser. Please use Firefox or Google Chrome');
	}

	exports.default = App;

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicNavbar = function (_React$Component) {
	    _inherits(BasicNavbar, _React$Component);

	    function BasicNavbar() {
	        _classCallCheck(this, BasicNavbar);

	        return _possibleConstructorReturn(this, (BasicNavbar.__proto__ || Object.getPrototypeOf(BasicNavbar)).apply(this, arguments));
	    }

	    _createClass(BasicNavbar, [{
	        key: 'func',
	        value: function func() {
	            this.props.handler('search');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            self = this;
	            return _react2.default.createElement(
	                'div',
	                { className: 'basicNavbar' },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'treelib' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '/' },
	                            'Treelib'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'search' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '/search' },
	                            'Search'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'about' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '/about' },
	                            'About'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'contact' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '/contact' },
	                            'Contact'
	                        )
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'navBorder first' }),
	                _react2.default.createElement('div', { className: 'navBorder second' }),
	                _react2.default.createElement('div', { className: 'navBorder third' })
	            );
	        }
	    }]);

	    return BasicNavbar;
	}(_react2.default.Component);

	exports.default = BasicNavbar;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'homePage' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'banner' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'innerBanner' },
	                        _react2.default.createElement('span', { className: 'helper' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'wrapper' },
	                            'A collection of high-quality tree photographs for educators, students and lay persons.',
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'searchButton' },
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '/search' },
	                                    'Start searching'
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'section' },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'This site is for students, professors, laymen, artists, naturalists – anyone studying trees or who just appreciates their beauty.  Need more pictures for a dendrology class, or to make your own collection, or to add background to a new website? ',
	                        _react2.default.createElement(
	                            'b',
	                            null,
	                            'Treelib'
	                        ),
	                        ' is yours all in one spot.'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photoBanner' },
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/5.jpg' }),
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/6.jpg' }),
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/7.jpg' }),
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/8.jpg' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'banner' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'innerBanner' },
	                        _react2.default.createElement('span', { className: 'helper' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'wrapper' },
	                            'Trees are our silent partners, sensing us as we move about, providing shelter, offering us beauty, and nurturing and protecting the earth.'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'section' },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Help yourself to the site, downloading  to enhance your learning and understanding of the trees around you.   Professors and students are encouraged to use pictures to add to their own presentations or collections and the comprehensive list of family/genus/species to copy and paste to one’s own list as one goes.  It is not the final resource for every aspect of identification, but rather a tool to be used to visually complement many other good sources of information.  Click links to connect to other excellent sources of technical information such as the Northern Ontario Plant Database, Wikipedia and so on.'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photoBanner' },
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/1.jpg' }),
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/4.jpg' }),
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/3.jpg' }),
	                        _react2.default.createElement('img', { src: 'img/homepage-banner/2.jpg' })
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'u',
	                            null,
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Treelib'
	                            ),
	                            ' is for educational purposes'
	                        ),
	                        ' to complement many excellent sources of technical information on trees, providing over 7,000 high quality pictures of many aspects of species.  Photos available through the site are to be used for study and educational purposes only.  Copying them and using them for commercial purposes is not permitted without specific written permission from the author.'
	                    )
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_React$Component) {
	    _inherits(About, _React$Component);

	    function About() {
	        _classCallCheck(this, About);

	        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	    }

	    _createClass(About, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'aboutPage' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'section' },
	                    _react2.default.createElement(
	                        'label',
	                        { className: 'title' },
	                        'About the photos'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'All but a handful of the photos have been taken by the author in botanical gardens, larger private collections, university arboretums, private  gardens, natural forests across Western North America and in Japan.'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Photos were taken with a Canon 70D camera, using 40mm, 17mm x 85mm and 18mm x 55mm lenses. The 70D is equipped with Canon’s new high resolution CMOS 70D sensor which allows raising film speed to up to 2000 or more without noticeable graininess.'
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'banner' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'section' },
	                    _react2.default.createElement(
	                        'label',
	                        { className: 'title' },
	                        'Species confirmation'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'The purpose of this site is more to give a flavour of the varieties of each species than to provide an authoritative catalogue of them.  For detailed lists of most of the varieties of each species, I have found that searching species names on Wikipedia provides the best information.'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Preference has been, in most cases, to support confirmation of many species and varieties at major sites like Vandusen Garden, Washington University Arboretum and other botanical gardens all over the Western North America, as far back as Manitoba and North Dakota, supplementing with pictures from many other locations.'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Cross-referencing of Latin names and usages has also been done from many of these sites, from web sites and from numerous good tree apps and books on tree identification; there are some differences in nomenclature between the U.S., Canada, Japan and Europe.  Regarding common English names, they are often quite varied and are best outlined on sites such as Wikipedia and other plant sites.'
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'banner' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'bio' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'title' },
	                        'Who we are'
	                    ),
	                    _react2.default.createElement(
	                        'table',
	                        null,
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement('img', { className: 'photo', src: 'img/blake.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement(
	                                        'ul',
	                                        { className: 'description' },
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'title' },
	                                            'Blake - Biologist and Photographer'
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'content' },
	                                            'Blake is a biologist and photographer who has over 25 years in the forestry industry, specifically with the import/export of lumber between Canada and Japan.'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement('img', { className: 'photo', src: 'img/nathan.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement(
	                                        'ul',
	                                        { className: 'description' },
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'title' },
	                                            'Nathan - Developement'
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'content' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { href: 'http://nathanwillson.com/' },
	                                                'Nathan'
	                                            ),
	                                            ' is a web developer based out of Victoria, Canada.'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'footer' },
	                        'This site was a collaboration between Blake and his son Nathan.'
	                    )
	                )
	            );
	        }
	    }]);

	    return About;
	}(_react2.default.Component);

	exports.default = About;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Contact = function (_React$Component) {
	    _inherits(Contact, _React$Component);

	    function Contact() {
	        _classCallCheck(this, Contact);

	        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	    }

	    _createClass(Contact, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'contactPage' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'section' },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Life is about connecting to other people and finding ways to serve them.  If you have some knowledge of and enjoy photographing trees, connect with us and contribute photographs of new species, improve our shots with your own, introduce great parks you have hiked around.  Become a part of a network of friends who love trees and the outdoors, building the site together.  It is as simple as sending us an email.'
	                    ),
	                    _react2.default.createElement('img', { src: 'img/email.jpg' })
	                ),
	                _react2.default.createElement('div', { className: 'banner' })
	            );
	        }
	    }]);

	    return Contact;
	}(_react2.default.Component);

	exports.default = Contact;

/***/ }

});