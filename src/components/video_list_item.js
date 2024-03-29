import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                    <div className="media-source">{video.snippet.channelTitle}</div>
                    <div className="media-date">{video.snippet.publishedAt.substr(0, 10)}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;