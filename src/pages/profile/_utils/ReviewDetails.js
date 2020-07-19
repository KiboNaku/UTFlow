import React from 'react'
import ModalHeader from './../../popups/_utils/ModalHeader'

function ReviewDetails(props) {
	return (
		<div className="modal fade" id={'review-details-modal' + props.data.id} role="dialog">

			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<ModalHeader text="Details" />
					<div className="modal-body">
						<h5>Last updated: {props.data.date} </h5>
						<h5> Grade: {props.data.grade !== null ? props.data.grade : "N/A"}</h5>
						<table className='table table-borderless review-content'>
							<thead>
								<tr>
									<th className='review-cell' scope="col" colSpan='2'>
										Course: {props.data.course.dept.abr + " " + props.data.course.num}
									</th>
									<th className='review-cell' scope="col" colSpan='2'>
										Professor: {props.data.prof.firstName + " " + props.data.prof.lastName}
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td> Usefulness: </td>
									<td> {props.data.course_rating.usefulness}</td>
									<td> Clear: </td>
									<td> {props.data.professor_rating.clear}</td>
								</tr>
								<tr>
									<td> Difficulty: </td>
									<td> {props.data.course_rating.difficulty}</td>
									<td> Engaging: </td>
									<td> {props.data.professor_rating.engaging}</td>
								</tr>
								<tr>
									<td> Workload: </td>
									<td> {props.data.course_rating.workload}</td>
									<td> Grading: </td>
									<td> {props.data.professor_rating.grading}</td>
								</tr>
								<tr>
									<td style={{ borderRight: 'solid 1px' }} colSpan='2'>{props.data.course_comments}</td>
									<td colSpan='2'>{props.data.professor_comments}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="modal-footer d-block" align="center">
						<button
							type="button"
							className="btn btn-outline-dark font-weight-bold"
							onClick={() => props.editReview(props.data.id)}
						> Edit Review
                    </button>
					</div>
				</div>
			</div >
		</div >
	)
}

export default ReviewDetails