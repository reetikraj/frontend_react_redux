import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { fetchInterviews } from '../../redux'
import InterviewRow from './InterviewRow'

function Interviews({ dispatch, interviewData }) {
  useEffect(() => {
    dispatch(fetchInterviews())
  }, [dispatch])

  const renderInterviews = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th colSpan="2">Interviewer Details</th>
              <th colSpan="3">Candidate Details</th>
            </tr>
          </thead>

          {interviewData.interviews.map((interview) => (
            <InterviewRow key={interview.id} interview={interview} />
          ))}
        </table>
      </div>
    )
  }

  let {url, path} = useRouteMatch()

  return interviewData.loading ? (
    <h2>Loading</h2>
  ) : interviewData.error ? (
    <h2>{interviewData.error}</h2>
  ) : (
    <div>
      <h2>Interviews</h2>
      <Link to={`${url}/new`}>New</Link> <br/>
      <div>
        {renderInterviews()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    interviewData: state.interview,
  }
}

export default connect(mapStateToProps)(Interviews)