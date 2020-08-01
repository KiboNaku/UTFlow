import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './CourseInfo.css'

function CourseInfo(props) {
	let parentPath = props.courseDept.toLowerCase().replace(' ', '') + "_" + props.courseNum.toLowerCase()
	parentPath += "_0"
	let parentTopic = (
		<div>
			<span>Parent Topic: </span>
			<Link
				className="utcolor parent-topic"
				to={{
					pathname: `/course-results/${parentPath}`,
					state: {
						courseId: props.parentId
					}
				}}
			> {props.parentTitle}
			</Link>
		</div>
	)
	return (
		<div className="course-info">
			<div className="course-code"> {props.courseDept} {props.courseNum} </div>
			<div className="course-name"> {props.courseTitle} </div>
			<hr className="course-name-underline"></hr>
			<p> {props.courseDes} </p>
			{props.topicNum > 0 ? parentTopic: null}
			<a className="utcolor" role="button" onClick={props.handleScrollToReview}>View Reviews</a>
		</div>
	);
}

export default CourseInfo;