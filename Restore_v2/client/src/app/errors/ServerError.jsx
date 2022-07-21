import { Button, Divider, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function ServerError() {
	const navigate = useNavigate();
	const location = useLocation();
	const { state } = useParams();

	return (
		<Container component={Paper}>
			{state?.error ? (
				<>
					<Typography variant='h3' color='error' gutterBottom>
						{state.error}
					</Typography>
					<Divider />
					<Typography>
						{state.error.detail || 'Internal server error'}
					</Typography>
				</>
			) : (
				<Typography variant='h5' gutterBottom>
					Server error
				</Typography>
			)}
			<Button onClick={() => navigate(-1)}>Go Back</Button>
		</Container>
	);
}
