import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BasicButton = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="success">Download</Button>
        </Stack>
    );
}

export default BasicButton