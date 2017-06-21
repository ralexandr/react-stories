import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helpers
import classNames from 'classnames';

//
import { storyItemSchema } from './story';


class StoryViewerItem extends Component {

	static propTypes = {
		item: PropTypes.shape(storyItemSchema).isRequired,
		language: PropTypes.object,
		setDuration: PropTypes.func.isRequired
	};

	static defaultProps = {
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
				days: 'days',
			},
		},
	};

	constructor(props) {
		super(props);
		this.state = {
			unmuted: false,
		};
	}

	componentDidMount() {
		this.play();
	}

	play(unmute) {
		const {
			setDuration,
		} = this.props;
		if (this.videoRef) {
			const video = this.videoRef;
			setDuration(video.duration);

			video.addEventListener('loadedmetadata', () => {
				setDuration(video.duration);
			});

			video.currentTime = 0;
			video.play();

			if (unmute) {
				this.unmuteVideo();
			}
		}
	}
	pauseVideo() {
		if (this.videoRef) {
			try {
				this.videoRef.pause();
			} catch (error) {
				console.error('Error on videoPause', error);
			}
		}
	}
	unmuteVideo() {
		this.videoRef.muted = false;
		this.videoRef.volume = 1.0;
		this.videoRef.removeAttribute('muted');
		this.videoRef.play();

		if (this.videoRef.paused) {
			this.videoRef.muted = true;
			this.videoRef.play();
		}
	}

	render() {
		const {
			item,
			language,
		} = this.props;
		const {
			unmuted,
		} = this.state;

		let itemHtml = null;
		switch (item.type) {
		case 'video':
			itemHtml = [
				<video
					muted
					playsInline
					preload="auto"
					ref={ref => { this.videoRef = ref; }}
					key={`item-${item.id}-video`}
					className="media"
					src={item.src} />,
				<b
					key={`item-${item.id}-unmute-btn`}
					onClick={() => this.unmuteVideo()}
					className={classNames('tip', {
						muted: !unmuted,
					})}>{language.unmute}</b>,
			];
			break;
		default:
			itemHtml = (
				<img className="media" src={item.src} alt={item.linkText} />
			);
		}

		return (
			<div
				key={item.id}
				className={classNames('item', {
					seen: item.seen,
					active: item.active,
				})}>
				{itemHtml}
			</div>
		);
	}
}

export default StoryViewerItem;
