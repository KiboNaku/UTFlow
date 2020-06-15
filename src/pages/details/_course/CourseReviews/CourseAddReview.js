import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import Login from '../../../popups/Login'
import Signup from '../../../popups/Signup'

function CourseAddReview(props) {
    const addReviewLink = (
        <Link to="/add-review">
            <button style={{height:"50px", width:"175px", fontSize: "20px"}} className="btn btn-dark font-weight-bold" type="button">
                Add a Review
                </button>
        </Link>
    )
    const loginLink = (
        <div>
            <button style={{height:"50px", width:"175px", fontSize: "20px"}} className="btn btn-dark font-weight-bold" type="button" data-toggle="modal" data-target="#login-modal">
                Add a Review
            </button>
            <Login />
            <Signup />
        </div>

    )
    return (
        <div className="courseAddReview" >
            <h3 className="add-review-text"> Have you taken {props.courseDep} {props.courseNo}? </h3>
            <div className="add-review">
                {localStorage.usertoken ? addReviewLink : loginLink}
            </div>    
        </div>
    );
}

export default withRouter(CourseAddReview);