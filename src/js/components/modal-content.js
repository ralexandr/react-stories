import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalContent extends Component {

	static propTypes = {
		stories: PropTypes.arrayOf(PropTypes.shape({

		})),
		skin: PropTypes.oneOf([
			'snapgram',
		]),
		avatars: PropTypes.bool,
		// containerDefaultClass: 'stories',
		// storyDefaultClass: 'story',
		backButton: PropTypes.bool,
		backNative: PropTypes.bool,
		autoFullScreen: PropTypes.bool,
		openEffect: PropTypes.bool,
		cubeEffect: PropTypes.bool,
		list: PropTypes.bool,
		localStorage: PropTypes.bool,
		onOpen: PropTypes.func,
		onView: PropTypes.func,
		onEnd: PropTypes.func,
		onClose: PropTypes.func,
		onNextItem: PropTypes.func,
	};

	static defaultProps = {
		stories: [],
		skin: 'snapgram',
		avatars: true,
		// containerDefaultClass: 'stories',
		// storyDefaultClass: 'story',
		backButton: true,
		backNative: false,
		autoFullScreen: false,
		openEffect: true,
		cubeEffect: false,
		list: false,
		localStorage: true,
		language: {
			unmute: 'Touch to unmute',
			keyboardTip: 'Press space to see next',
			visitLink: 'Visit link',
			time: {
				ago: 'ago',
				hour: 'hour',
				hours: 'hours',
				minute: 'minute',
				minutes: 'minutes',
				fromnow: 'from now',
				seconds: 'seconds',
				yesterday: 'yesterday',
				tomorrow: 'tomorrow',
				days: 'days'
			}
		}
	};

	render() {
		return (
			<div id="zuck-modal-content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus aliquam cumque enim, expedita hic illo impedit, pariatur rerum sapiente suscipit vel vero vitae. Aliquid asperiores in quidem velit veniam.
			</div>
		);
	}
}

export default ModalContent;