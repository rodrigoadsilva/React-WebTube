const INITIAL_STATE = {
    videos:[],
    loading: false,
    error: false   
}

export default function search(state = INITIAL_STATE, action){
    switch(action.type){
        case 'START_SEARCH_VIDEO':
            return {
                videos: [],
                loading: true,
                error: false
            }
        case 'SEARCH_VIDEO_SUCCESS':
            return {
                videos: action.videos,
                loading: false,
                error: false
            }
        case 'SEARCH_VIDEO_FAIL':
            return {
                videos: [],
                loading: false,
                error: true
            }
        default : return state
    }
}