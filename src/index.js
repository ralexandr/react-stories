import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/app';

function buildItem(id, type, length, src, preview, link, seen, time){
	return {
		"id": id,
		"type": type,
		"length": length,
		"src": src,
		"preview": preview,
		"link": link,
		"seen": seen,
		"time": time
	};
}

const stories = [
	{
		id: "ramon",
		picture: "https://avatars1.githubusercontent.com/u/2271175?v=3&s=460",
		title: "Ramon",
		link: "https://ramon.codes",
		lastUpdated: 1492665454,
		items: [
			buildItem("ramon-1", "photo", 3, "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg", "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg", '', false, 1492665454),
			buildItem("ramon-2", "photo", 3, "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg", "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg", 'https://ramon.codes', false, 1492665454),
			buildItem("ramon-3", "video", 0, "https://scontent-gru2-2.cdninstagram.com/t50.2886-16/14965218_193969377722724_482497862983221248_n.mp4", "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg", '', false, 1492665454)
		]
	},
	{
		id: "gorillaz",
		picture: "https://lh3.googleusercontent.com/xYFz6B9FHMQq7fDOI_MA61gf0sNdzGBbdR7-mZ7i4rEVvE_N-kZEY_A4eP74Imcf8Sq3FYxAgd4eJA=w200",
		title: "Gorillaz",
		link: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("gorillaz-1", "video", 0, "https://instagram.frao1-1.fna.fbcdn.net/t50.2886-16/17886251_1128605603951544_572796556789415936_n.mp4", "https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:small", '', false, 1492665454),
			buildItem("gorillaz-2", "photo", 3, "https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:large","https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:small", '', false, 1492665454),
		]
	},
	{
		id: "ladygaga",
		picture: "https://lh3.googleusercontent.com/VkANYSL1HOzINPSnzBJRM879b302ShsRwLoKD7mLezgTLvlpHPm_dIVop7mkAQfepze6O5N8rw8l4yM=w200",
		title: "Lady Gaga",
		link: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("ladygaga-1", "photo", 5, "https://pbs.twimg.com/media/C8mtrEMXcAA9KKM.jpg:large", "https://pbs.twimg.com/media/C8mtrEMXcAA9KKM.jpg:small", '', false, 1492665454),
			buildItem("ladygaga-2", "photo", 3, "https://pbs.twimg.com/media/C4t_bxcXAAE3Hwb.jpg:large", "https://pbs.twimg.com/media/C4t_bxcXAAE3Hwb.jpg:small", 'http://ladygaga.com', false, 1492665454),
		]
	},
	{
		id: "starboy",
		picture: "https://lh3.googleusercontent.com/nMxfllzaAmaCCZJEMiKe2EARjyUNItQ-mdgAq6he-LWXwkIWbiiBIHyC3rGiqDu6fgyVK6NnjcgueA=w200",
		title: "The Weeknd",
		link: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("starboy-1", "photo", 5, "https://pbs.twimg.com/media/C6f-dTqVQAAiy1K.jpg:large", "https://pbs.twimg.com/media/C6f-dTqVQAAiy1K.jpg:small", '', false, 1492665454)
		]
	},
	{
		id: "qotsa",
		picture: "https://lh3.googleusercontent.com/nE4grkY8s88P_1mFFA06mGCNshhqtIz4C4y2dV7AZbm0360zopRKDMCYtUHR0uQR2DAfYMRZdA=s180-p-e100-rwu-v1",
		title: "QOTSA",
		link: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("qotsa-1", "photo", 10, "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:large", "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:small", '', false, 1492665454)
		]
	}
];

ReactDOM.render(
	<App stories={stories} />,
	document.getElementById('root'),
);
