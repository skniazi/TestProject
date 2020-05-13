import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	gridStyles: {
		backgroundColor: '#18b',
		padding: '10px'
	},

	textStyles: {
		color: 'white',
		fontSize: '19px'
	},

	spanStyles: {
		fontWeight: 'bold'
	}
});

export function Header() {
	const classes = useStyles();
	return (
		<div>
			<Grid className={classes.gridStyles} container>
				<Grid item xs={12}>
					<Typography variant="h1" className={classes.textStyles}>
						<span className={classes.spanStyles}>Made</span> <span className={classes.spanStyles}>A</span>
						nywhere <span className={classes.spanStyles}>B</span>ut{' '}
						<span className={classes.spanStyles}>C</span>hina
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
