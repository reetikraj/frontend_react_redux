export const FETCH_INTERVIEWS_REQUEST = "FETCH_INTERVIEWS_REQUEST"
export const FETCH_INTERVIEWS_SUCCESS = "FETCH_INTERVIEWS_SUCCESS"
export const FETCH_INTERVIEWS_FAILURE = "FETCH_INTERVIEWS_FAILURE"

export const fetchInterviewsRequest = () => {
  return {
    type: FETCH_INTERVIEWS_REQUEST,
  }
}

export const fetchInterviewsSuccess = (interviews) => {
  return {
    type: FETCH_INTERVIEWS_SUCCESS,
    payload: interviews,
  }
}

export const fetchInterviewsFailure = (error) => {
  return {
    type: FETCH_INTERVIEWS_FAILURE,
    payload: error,
  }
}

export const fetchInterviews = () => {
  return async (dispatch) => {
    dispatch(fetchInterviewsRequest());

    try {
        const response = await fetch("http://localhost:3005/api/v1/interviews")
        const interviews = await response.json()
        dispatch(fetchInterviewsSuccess(interviews.interviews))
    } catch (error) {
        const errorMsg = error.message
        dispatch(fetchInterviewsFailure(errorMsg))
    }

  }
}