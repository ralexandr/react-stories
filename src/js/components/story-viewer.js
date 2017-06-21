import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helpers
import classNames from 'classnames';

//
import { storySchema } from './story';

// Components
import StoryViewerItem from './story-viewer-item';


class StoryViewer extends Component {

	static propTypes = {
		story: PropTypes.shape(storySchema).isRequired,
		close: PropTypes.func.isRequired,
		nextItem: PropTypes.func.isRequired,
		slideTimeout: PropTypes.number,
	};

	static defaultProps = {
		slideTimeout: 3,
	};

	constructor(props) {
		super(props);
		this.state = {
			pointersData: {},
		};
	}

	setDuration(itemId, duration) {
		if (itemId && duration) {
			this.setState({
				pointersData: {
					...this.state.pointersData,
					[itemId]: duration,
				},
			});
		}
	}


	render() {
		const {
			story,
			close,
			nextItem,
			slideTimeout,
		} = this.props;

		return (
			<div id="zuck-modal-slider-stories" className="slider">
				<div className={classNames('story-viewer', {
					muted: true,
					viewing: true,
				})}>
					<div className="head">
						<div className="left">
							<a className="back" onClick={() => close()}>‹</a>
							<u
								className="img"
								style={{
									backgroundImage: `url(${story.picture})`,
								}} />
							<div>
								<strong>{story.title}</strong>
								<span className="time">{story.timestamp}</span>
							</div>
						</div>
						<div className="right">
							<span className="time">{story.timestamp}</span>
							<span className="loading" />
							<a className="close" onClick={() => close()}>×</a>
						</div>
					</div>
					<div className="slides-pointers">
						<div>
							{story.items.map(item => {
								const animationDuration = (typeof this.state.pointersData[item.id] !== 'undefined')
									? `${this.state.pointersData[item.id]}s`
									: `${slideTimeout}s`;
								return (
									<span
										key={item.id}
										className={classNames({
											active: item.active,
										})}>
										<b
											onAnimationEnd={() => nextItem()}
											style={{
												animationDuration,
											}} />
									</span>
								);
							})}
						</div>
					</div>
					<div id="zuck-modal-slider" className="slides">
						{story.items.map(item => (
							<StoryViewerItem
								key={item.id}
								item={item}
								setDuration={duration => this.setDuration(item.id, duration)} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default StoryViewer;
