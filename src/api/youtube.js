import axios from 'axios';

const key = 'AIzaSyAPdr_cyCmEjig_xgnEgTw1wZ_MUZIJQIA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 5,
		type: 'video',
		key
	}
});
