(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'section',
    { className: 'app-container' },
    _react2.default.createElement(
      'h2',
      null,
      'Scheduling starts now'
    ),
    _react2.default.createElement(_form2.default, null)
  );
};

},{"./form":2,"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this));

    _this.state = {
      taskName: '',
      taskDate: ''
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'changeTaskName',
    value: function changeTaskName(event) {
      this.setState({ taskName: event.target.value });
    }
  }, {
    key: 'changeTaskDate',
    value: function changeTaskDate(event) {
      this.setState({ taskDate: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'form' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'task-name' },
          'Task Name'
        ),
        _react2.default.createElement('input', {
          onChange: function onChange(event) {
            return _this2.changeTaskName(event);
          },
          id: 'task-name',
          placeholder: 'Task Name'
        }),
        _react2.default.createElement(
          'div',
          { className: 'name-display' },
          this.state.taskName
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'task-date' },
          'Task date'
        ),
        _react2.default.createElement('input', {
          type: 'date',
          onChange: function onChange(event) {
            return _this2.changeTaskDate(event);
          },
          id: 'task-date',
          placeholder: 'Task Date'
        }),
        _react2.default.createElement(
          'div',
          { className: 'date-display' },
          this.state.taskName
        ),
        this.state.taskDate
      );
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;


Form.propTypes = {
  task: _react.PropTypes.object
};

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

},{"./components/app":1,"react":"react","react-dom":"react-dom"}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY29tcG9uZW50cy9hcHAuanMiLCJwdWJsaWMvY29tcG9uZW50cy9mb3JtLmpzIiwicHVibGljL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7QUFDQTs7Ozs7O2tCQUVjO0FBQUEsU0FDWjtBQUFBO0FBQUEsTUFBUyxXQUFVLGVBQW5CO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFGRixHQURZO0FBQUEsQzs7Ozs7Ozs7Ozs7QUNIZDs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUNuQixrQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUssS0FBTCxHQUFhO0FBQ1gsZ0JBQVUsRUFEQztBQUVYLGdCQUFVO0FBRkMsS0FBYjtBQUZZO0FBTWI7Ozs7bUNBRWMsSyxFQUFPO0FBQ3BCLFdBQUssUUFBTCxDQUFjLEVBQUUsVUFBVSxNQUFNLE1BQU4sQ0FBYSxLQUF6QixFQUFkO0FBQ0Q7OzttQ0FFYyxLLEVBQU87QUFDcEIsV0FBSyxRQUFMLENBQWMsRUFBRSxVQUFVLE1BQU0sTUFBTixDQUFhLEtBQXpCLEVBQWQ7QUFDRDs7OzZCQUdRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsWUFBTyxTQUFRLFdBQWY7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUNFLG9CQUFVLGtCQUFDLEtBQUQ7QUFBQSxtQkFBVyxPQUFLLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBWDtBQUFBLFdBRFo7QUFFRSxjQUFHLFdBRkw7QUFHRSx1QkFBWTtBQUhkLFVBRkY7QUFPRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFBK0IsZUFBSyxLQUFMLENBQVc7QUFBMUMsU0FQRjtBQVFFO0FBQUE7QUFBQSxZQUFPLFNBQVEsV0FBZjtBQUFBO0FBQUEsU0FSRjtBQVNFO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLG9CQUFVLGtCQUFDLEtBQUQ7QUFBQSxtQkFBVyxPQUFLLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBWDtBQUFBLFdBRlo7QUFHRSxjQUFHLFdBSEw7QUFJRSx1QkFBWTtBQUpkLFVBVEY7QUFlRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFBK0IsZUFBSyxLQUFMLENBQVc7QUFBMUMsU0FmRjtBQWU0RCxhQUFLLEtBQUwsQ0FBVztBQWZ2RSxPQURGO0FBbUJEOzs7Ozs7a0JBdENrQixJOzs7QUEwQ3JCLEtBQUssU0FBTCxHQUFpQjtBQUNmLFFBQU0saUJBQVU7QUFERCxDQUFqQjs7Ozs7QUM1Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxtQkFBUyxNQUFULENBQWdCLGtEQUFoQixFQUF5QixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0KCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgPGgyPlNjaGVkdWxpbmcgc3RhcnRzIG5vdzwvaDI+XG4gICAgPEZvcm0gLz5cbiAgPC9zZWN0aW9uPlxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhc2tOYW1lOiAnJyxcbiAgICAgIHRhc2tEYXRlOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlVGFza05hbWUoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFza05hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVRhc2tEYXRlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhc2tEYXRlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFzay1uYW1lXCI+VGFzayBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VUYXNrTmFtZShldmVudCl9XG4gICAgICAgICAgaWQ9XCJ0YXNrLW5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFzayBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWRpc3BsYXlcIj57dGhpcy5zdGF0ZS50YXNrTmFtZX08L2Rpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YXNrLWRhdGVcIj5UYXNrIGRhdGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VUYXNrRGF0ZShldmVudCl9XG4gICAgICAgICAgaWQ9XCJ0YXNrLWRhdGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFzayBEYXRlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWRpc3BsYXlcIj57dGhpcy5zdGF0ZS50YXNrTmFtZX08L2Rpdj57dGhpcy5zdGF0ZS50YXNrRGF0ZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgdGFzazogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==
