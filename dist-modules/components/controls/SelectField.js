'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validation = require('./../../helpers/validation');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** SelectField Component */
var SelectField = function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField(props) {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props));

    _this.state = {
      value: props.attributes.selected,
      errorText: props.attributes.errorText || ''
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(SelectField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.state = {
        value: props.attributes.selected,
        errorText: props.attributes.errorText || ''
      };
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var isValid = true;
      if (this.props.rules && this.props.rules.validation) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.props.rules.validation[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var data = _step.value;

            isValid = _validation2.default[data.rule](value, data.value);
            if (!isValid) {
              return {
                isValid: false,
                message: data.message
              };
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return {
        isValid: true,
        message: ''
      };
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var validator = this.validate(args[2]);
      if (!validator.isValid) {
        this.setState({
          errorText: validator.message,
          value: args[2]
        });
      } else {
        this.setState({
          errorText: '',
          value: args[2]
        });
      }
      if (typeof this.props.onChange === 'function') {
        var _props;

        (_props = this.props).onChange.apply(_props, [this.props.control].concat(args));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var SELECTFIELD = this.props.library[props.component];
      var OPTION = this.props.library[props.option];
      return _react2.default.createElement(
        SELECTFIELD,
        _extends({}, props.attributes, { value: this.state.value, errorText: this.state.errorText, onChange: this.onChange }),
        this.props.control.options.map(function (option, index) {
          return _react2.default.createElement(OPTION, _extends({}, option, { key: index }));
        })
      );
    }
  }]);

  return SelectField;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? SelectField.propTypes = {
  library: _react.PropTypes.object,
  component: _react.PropTypes.string.isRequired,
  attributes: _react.PropTypes.object,
  control: _react.PropTypes.object,
  option: _react.PropTypes.string.isRequired,
  rules: _react.PropTypes.object,
  onChange: _react.PropTypes.func
} : void 0;
exports.default = SelectField;