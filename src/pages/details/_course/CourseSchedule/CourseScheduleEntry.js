import React from 'react';
import { Link } from 'react-router-dom'

function CourseScheduleEntry(props) {
    const profPath = props.profFirst.toLowerCase().replace(" ", "") + "_" + props.profLast.toLowerCase().replace(" ", "")
    let crossListed = props.crossListed.map(course => {
        let coursePath = course.dept.toLowerCase().replace(' ', '') + "_" + course.num.toLowerCase()
        if (course.topicNum >= -1) {
            coursePath += "_" + course.topicNum.toString()
        }
        return (
            <li>
                <Link
                    className="utcolor"
                    to={{
                        pathname: `/course-results/${coursePath}`,
                        state: {
                            courseId: course.id
                        }
                    }}
                > {course.dept} {course.num}
                </Link>
            </li>
        )
    })
    let prof = (
        <Link
            className="utcolor"
            to={{
                pathname: `/prof-results/${profPath}`,
                state: {
                    profId: props.profId
                }
            }}
        > {props.profFirst} {props.profLast}
        </Link>
    )
    let enrollment = props.seatsTaken === null || props.maxEnrollment === null ? "N/A" : props.seatsTaken + "/" + props.maxEnrollment

    let location
    if(props.location !== null && props.location !== "N/A"){
        let buildingName = props.location.split()[0]
        let locationLink = `https://utdirect.utexas.edu/apps/campus/buildings/nlogon/maps/UTM/${buildingName}/`
        location = <a href={locationLink} rel="noopener noreferrer" target="_blank"> {props.location} </a>
    }
    return (
        <tr key={props.id}>
            <td>
                {props.uniqueNum !== null ? props.uniqueNum: "N/A"}
            </td>
            <td align="center">
                {props.profId !== null ? prof : "N/A"}
            </td>
            <td align="center">
                {enrollment}
            </td>
            <td align="center">
                {props.timeFrom !== null ? (props.timeFrom + " - " + props.timeTo) : "N/A"}
            </td>
            <td align="center">
                {props.days !== "" ? props.days : "N/A"}
            </td>
            <td align="center">
                {props.location !== null && props.location !== "N/A" ? location : "N/A"}
            </td>
            <td align="center">
                {props.crossListed.length > 0 ? <ul>{crossListed}</ul> : "N/A"}
            </td>
        </tr>
    );
}

export default CourseScheduleEntry;