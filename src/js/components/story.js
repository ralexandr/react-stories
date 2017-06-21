import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const storyItemSchema = {
	id: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]).isRequired,
	src: PropTypes.string.isRequired,
	preview: PropTypes.string,
	linkText: PropTypes.string,
};

export const storySchema = {
	id: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]).isRequired,
	title: PropTypes.string,
	timestamp: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	picture: PropTypes.string,
	link: PropTypes.string,
	url: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape(storyItemSchema)),
};

// Components


class Story extends Component {

	static propTypes = {
		className: PropTypes.string,
		story: PropTypes.shape(storySchema).isRequired,
		open: PropTypes.func.isRequired,
	};

	static defaultProps = {
		className: 'story',
	};

	render() {
		const { story, className, open } = this.props;
		return (
			<div className={className}>
				<a
					onClick={e => {
						e.preventDefault();
						open();
					}}
					href={story.link}>
					<span className="img">
						<u style={{
							backgroundImage: `url(${story.picture})`,
						}} />
					</span>
					<span className="info">
						<strong>{story.title}</strong>
						<span className="time">{story.timestamp}</span>
					</span>
				</a>
				<ul className="items">
					{story.items.map(item => (
						<li key={item.id}>
							<a
								href={item.src}>
								<img
									alt={item.linkText}
									src={item.preview} />
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Story;
