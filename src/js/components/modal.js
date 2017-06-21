import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helpers
import classNames from 'classnames';


class Modal extends Component {

	static propTypes = {
		className: PropTypes.string,
		openEffect: PropTypes.bool,
		cubeEffect: PropTypes.bool,
		animated: PropTypes.bool,
		autoFullScreen: PropTypes.bool,
		children: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.array,
		]),
	};

	static defaultProps = {
		className: '',
		openEffect: true,
		cubeEffect: false,
		animated: false,
		autoFullScreen: false,
		children: null,
	};

	render() {
		const {
			className,
			openEffect,
			cubeEffect,
			autoFullScreen,
			animated,
			children,
		} = this.props;

		return (
			<div
				id="zuck-modal"
				className={classNames(className, {
					'with-effects': openEffect,
					'with-cube': cubeEffect,
					fullscreen: autoFullScreen,
					animated,
				})}>
				<div id="zuck-modal-content" className="zuck-modal-content">
					{children}
				</div>
			</div>
		);
	}
}

export default Modal;