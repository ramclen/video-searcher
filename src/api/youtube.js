import axios from "axios";

const key = 'AIzaSyAx7lbN4vlyWxgrmGeRIfXKob0mrbpMZGI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    type: 'video',
    key
  }
})