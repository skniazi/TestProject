import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	gridStyles: {
		marginTop: '320px',
		backgroundColor: 'black',
		minHeight: '10vh',
		padding: '10px'
	},
	textStyles: {
		color: 'white'
	}
});

export function Footer() {
	const classes = useStyles();
	return (
		<footer>
			<Grid container alignItems="center" className={classes.gridStyles}>
				<Grid item xs={12} sm={6}>
					<Typography variant="caption" className={classes.textStyles}>
						&copy; 2020 All rights reserved
					</Typography>
				</Grid>
			</Grid>
		</footer>
	);
}
