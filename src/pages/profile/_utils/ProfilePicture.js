import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
	profile: {
		width: theme.spacing(12),
		height: theme.spacing(12),
		marginTop: 15,
		marginBottom: 15,
		margin: 'auto',
		"@media (max-width: 576px)": {
			width: theme.spacing(9),
			height: theme.spacing(9)
		}
	},
	selection: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		marginBottom: 15,
		"@media (max-width: 576px)": {
			width: theme.spacing(8),
			height: theme.spacing(8)
		}
	}
}));

function ProfilePicture(props) {
	const classes = useStyles();

	return (
		<div>
			<span className='d-flex justify-content-center'>
				<Avatar
					alt={props.name}
					src={props.image === ''
						? require('./../../../res/img/corgi1.jpg')
						: (props.image === undefined
							? require('./../../../res/img/corgi1.jpg')
							: require('./../../../res/img/' + props.image))
					}
					type='button'
					data-toggle="modal"
					data-target={'#change-profile-pic'}
					className={classes.profile} />
			</span>
		</div>
	)
}

export function SelectionPicture(props) {
	const classes = useStyles();

	return (
		<Avatar
			alt={props.name}
			src={props.image === ''
				? require('./../../../res/img/corgi1.jpg')
				: (props.image === undefined
					? require('./../../../res/img/corgi1.jpg')
					: require('./../../../res/img/' + props.image))
			}
			type='button'
			className={classes.selection}
			onClick={() => props.onImageChange(props.image)}
		/>
	)
}

export default ProfilePicture