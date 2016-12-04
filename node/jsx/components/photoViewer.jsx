import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class PhotoViewer extends React.Component {
    render() {
        return (
            <div className="photoViewer">
                <div className="image">
                    <div className="prev" onClick={this.props.prevCallback}><i className="fa fa-angle-double-left fa-2x"></i></div>
                    <div className="imageWrapper">
                        <span className="helper"></span>
                        <div className="imageInnerWrapper">
                            <img src={this.props.image} /><div className="photoButtons">
                            <ul>
                                <li className="flickr"><i className="fa fa-flickr fa-lg"></i> flickr</li>
                                <li><i className="fa fa-download fa-lg"></i> download</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="next" onClick={this.props.nextCallback}><i className="fa fa-angle-double-right fa-2x"></i></div>
                </div>
                <div className="closeButton" onClick={this.props.closeCallback}><i className="fa fa-times fa-lg"></i> Close </div>
            </div>
        );
    }
}

export default PhotoViewer