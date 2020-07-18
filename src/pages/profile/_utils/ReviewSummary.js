import React from 'react'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded'
import Confirm from './../../_utils/Confirm'
import ReviewDetails from './ReviewDetails'

function ReviewSummary(props) {

    let courseLikeIcon = props.data.courseRating.approval ?
        <ThumbUpRoundedIcon style={{ fill: '#a6cd57' }} /> : <ThumbUpRoundedIcon style={{ fill: 'gray' }} />
    let courseDislikeIcon = !props.data.courseRating.approval ?
        <ThumbDownRoundedIcon style={{ fill: '#ed7f7b' }} /> : <ThumbDownRoundedIcon style={{ fill: 'gray' }} />

    let profLikeIcon = props.data.profRating.approval ?
        <ThumbUpRoundedIcon style={{ fill: '#a6cd57' }} /> : <ThumbUpRoundedIcon style={{ fill: 'gray' }} />
    let profDislikeIcon = !props.data.profRating.approval ?
        <ThumbDownRoundedIcon style={{ fill: '#ed7f7b' }} /> : <ThumbDownRoundedIcon style={{ fill: 'gray' }} />

    return (
        <div className="review-container">
            <div className="card-wrap">
                <div className="card-body">   
                    <Confirm
                        title="Delete Review"
                        message="Are you sure you want to delete this review?"
                        handleOk={() => props.deleteReview(props.data.id)}
                    />
                    <p className="course-name-wrapper" 
                    style={props.data.courseRating.approval ? {color: "green"} : {color: "red"}}>
                        <span className="course-name">{props.data.course.dept.abr} {props.data.course.num}</span>
                    </p>

                    <p className="prof-name" 
                    style={props.data.profRating.approval ? {color: "green"} : {color: "red"}}>
                        <span>{props.data.prof.firstName} {props.data.prof.lastName}</span>
                    </p>

                    <p className="semester-date">
                        <span>{props.data.semester.semester} {props.data.semester.year}</span>
                    </p>
    
                    <p className="update-date"><small>Last updated: {props.data.date}</small></p>

                    <div className="delete-review">
                        <div data-toggle="modal" data-target="#confirmModal">Delete</div>
                    </div>

                    <ReviewDetails
                        data={props.data}
                        editReview={props.editReview}
                    />
                    <div className="button-wrapper1">
                        <button type="button"
                            className="review-buttons"
                            data-toggle="modal"
                            data-target={"#review-details-modal" + props.data.id}
                        > More Details
                        </button>
                    </div>
                    <br></br>
                    <div className="button-wrapper2"> 
                        <button
                            type="button"
                            className="review-buttons"
                            onClick={() => props.editReview(props.data.id)}
                        > Edit Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSummary;