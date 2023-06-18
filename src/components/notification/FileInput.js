import { Button, TextField } from '@mui/material';

export function FileUploadForm({ file, setData }) {
  const handleFileChange = (e) => {
    setData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  return (
    <form>
      <label htmlFor="file-upload">
        <TextField
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <Button
          variant="contained"
          sx={{ mr: '32px', background: '#F8C950', fontWeight: 'bold' }}
          component="span"
        >
          {file ? file.name : 'Прикрепить файл'}
        </Button>
      </label>
    </form>
  );
}
