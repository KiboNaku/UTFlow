import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const propTypes = {
    // average rating eCIS of the prof
    eCIS: PropTypes.number,

    // percentage of students who liked the prof
    percentLiked: PropTypes.number,

    // average rating for the clearness for the prof
    clear: PropTypes.number,

    // average rating for the engagingness of the prof
	engaging: PropTypes.number,

	// average rating for the grading of the prof
    grading: PropTypes.number,
    
    // the number of ratings that the prof has gotten
    numRatings: PropTypes.number
}

function ProfRatings(props) {

    const StyledRating = withStyles({
        iconFilled: {
            color: '#bf5700',
        },
    })(Rating);


    // determine rating values depending on whether if they are null or exist
    const percentLikedValue = props.percentLiked === null ? 100 : props.percentLiked
    const percentLiked = props.percentLiked === null ? "N/A" : props.percentLiked.toString() + "%"

    const clearValue = props.clear === null ? 0 : props.clear
    const clear = props.clear === null ? "N/A" : props.clear

    const engagingValue = props.engaging === null ? 0 : props.engaging
    const engaging = props.engaging === null ? "N/A" : props.engaging

    const gradingValue = props.grading === null ? 0 : props.grading
    const grading = props.grading === null ? "N/A" : props.grading

    const eCISValue = props.eCIS === null ? 0 : props.eCIS
    const eCIS = props.eCIS === null ? "N/A" : props.eCIS

    const numRatings = props.numRatings

    const progressClass = props.percentLiked === null ? "progress-bar progress-bar-striped" : "progress-bar"

    return (
        <div className="prof-ratings">
            <h3 className="rating-heading"> User Ratings ({numRatings})</h3>
            <div className="rating">
                <p className="p-rating"> Liked: {percentLiked} </p>
                <div className="progress" style={{backgroundColor: 'gray'}}>
                    <div
                        className={progressClass}
                        role="progressbar"
                        style={{ width: `${percentLikedValue}%`, backgroundColor: props.percentLiked === null ? "gray": "#fbfbfb" }}
                        aria-valuenow={percentLikedValue}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                    </div>
                </div>
            </div>
            <div className="userRatings">
                
                <div className="rating">
                    <p className="p-rating"> eCIS: {eCIS} </p>
                    <StyledRating
                        style={{ verticalAlign: "middle" }}
                        defaultValue={eCISValue}
                        precision={0.1}
                        icon={<RadioButtonCheckedIcon style={{color: "#fbfbfb"}} fontSize="large" />}
                        emptyIcon={<RadioButtonUncheckedIcon style={{color: "gray"}} fontSize="large" />}
                        readOnly
                    />
                </div>

                <div className="rating">
                    <p className="p-rating"> Clear: {clear} </p>
                    <StyledRating
                        style={{ verticalAlign: "middle" }}
                        defaultValue={clearValue}
                        precision={0.1}
                        icon={<RadioButtonCheckedIcon style={{color: "#fbfbfb"}} fontSize="large" />}
                        emptyIcon={<RadioButtonUncheckedIcon style={{color: "gray"}} fontSize="large" />}
                        readOnly
                    />
                </div>
            </div>

            <div className="userRatings">
                <div className="rating">
                    <p className="p-rating"> Engaging: {engaging} </p>
                    <StyledRating
                        style={{ verticalAlign: "middle" }}
                        defaultValue={engagingValue}
                        precision={0.1}
                        icon={<RadioButtonCheckedIcon style={{color: "#fbfbfb"}} fontSize="large" />}
                        emptyIcon={<RadioButtonUncheckedIcon style={{color: "gray"}} fontSize="large" />}
                        readOnly
                    />
                </div>
                <div className="rating">
                    <p className="p-rating"> Grading Rigor: {grading} </p>
                    <StyledRating
                        style={{ verticalAlign: "middle" }}
                        defaultValue={gradingValue}
                        precision={0.1}
                        icon={<RadioButtonCheckedIcon style={{color: "#fbfbfb"}} fontSize="large" />}
                        emptyIcon={<RadioButtonUncheckedIcon style={{color: "gray"}} fontSize="large" />}
                        readOnly
                    />
                </div>
            </div>
        </div>

    );
}

ProfRatings.props = propTypes;

export default ProfRatings;