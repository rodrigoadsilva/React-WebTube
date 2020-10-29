import youtubeSearch from 'youtube-api-v3-search';
import YTApi from '../../api';

const API_KEY = YTApi;

export const startSearchVideo = () => {
    return {
        type: 'START_SEARCH_VIDEO',
        loading: true,
        error: false
    }
}

export const searchVideoSuccess = (videos) => {
    return {
        type: 'SEARCH_VIDEO_SUCCESS',
        videos,
        loading: false,
        erro: false
    }
}

export const searchVideoFail = () => {
    return {
        type: 'SEARCH_VIDEO_FAIL',
        loading: false,
        erro: true
    }
}

export const searchVideo = (term) => {
    return dispatch => {
        dispatch(startSearchVideo());
        youtubeSearch(API_KEY, {q: term})
            .then((data) => dispatch(searchVideoSuccess(data.items)))
            .catch(searchVideoFail());
    }
}

