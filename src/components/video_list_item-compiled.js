"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoListItem = function VideoListItem(_ref) {
    var video = _ref.video,
        onVideoSelect = _ref.onVideoSelect;

    var imageUrl = video.snippet.thumbnails.default.url;

    return _react2.default.createElement(
        "li",
        { onClick: function onClick() {
                return onVideoSelect(video);
            }, className: "list-group-item" },
        _react2.default.createElement(
            "div",
            { className: "video-list media" },
            _react2.default.createElement(
                "div",
                { className: "media-left" },
                _react2.default.createElement("img", { className: "media-object", src: imageUrl })
            ),
            _react2.default.createElement(
                "div",
                { className: "media-body" },
                _react2.default.createElement(
                    "div",
                    { className: "media-heading" },
                    video.snippet.title
                ),
                _react2.default.createElement(
                    "div",
                    { className: "media-source" },
                    video.snippet.channelTitle
                ),
                _react2.default.createElement(
                    "div",
                    { className: "media-date" },
                    video.snippet.publishedAt.substr(0, 10)
                )
            )
        )
    );
};

exports.default = VideoListItem;

//# sourceMappingURL=video_list_item-compiled.js.map