import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	},

	gridStyleLeft: {
		maxWidth: '500',
		marginTop: '20px',
		padding: '10px'
	},

	spanStyles: {
		fontWeight: 'bold'
	},

	textStyles: {
		fontSize: '18px'
	},

	gridStyleRight: {
		padding: '20px'
	},

	paperStyles: {
		padding: '50px',
		backgroundColor: '#eff'
	},

	textFieldStyles: {
		maxWidth: '100%'
	},

	imageStyles: {
		width: '300px'
	}
});

export function Content() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid className={classes.gridStyleLeft} item xs={12} sm={6}>
					<Typography className={classes.textStyles} variant="h2" color="primary">
						What is madeABC?
					</Typography>
					<Typography className={classes.textStyles} variant="h2" gutterBottom>
						MadeABC is an upcoming shopping website similar to ebay, Amazon that only sells products that
						are not made in China.
					</Typography>
					<br />
					<Typography className={classes.textStyles} variant="h2" color="secondary">
						Why should I use it?
					</Typography>
					<Typography className={classes.textStyles} variant="h2">
						We believe no single country should have a monopoly in global manufacturing.
						<br />
						<br /> We want to give other nations, including our own, the opportunity to grow and diversify
						supply chains.
					</Typography>
					<br />
					<br />
					<Typography className={classes.textStyles} variant="h2">
						<span className={classes.spanStyles}>As consumers, you get better, safer products.</span>
					</Typography>
				</Grid>
				<Grid container className={classes.gridStyleRight} item xs={12} sm={6} justify="center">
					<form className={classes.paperStyles} noValidate autoComplete="off">
						<TextField
							className={classes.textFieldStyles}
							id="outlined-basic"
							label="Email Address"
							variant="outlined"
						/>
						<br />
						<br />
						<Button display="block" color="primary" variant="contained">
							I,m Interested!
						</Button>
					</form>
					<br />
					<br />
					<img
						className={classes.imageStyles}
						src="https://www.shell.com.pk/business-customers/industrial-lubricants/lubricants-product-range/shell-corena-compressor-oils/_jcr_content/pagePromo/image.img.960.jpeg/1505774292333/corena-products.jpeg?imwidth=960"
						alt="product"
					/>
				</Grid>
			</Grid>
		</div>
	);
}
