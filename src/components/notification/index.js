import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Layout } from './../layout/index';
import { useEffect, useState } from 'react';
import { FileUploadForm } from './FileInput';

const initState = {
  chat: '',
  theme: '',
  message: '',
  file: null,
};

export function NotificationForm() {
  const [data, setData] = useState(initState);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // API запрос для получения списка

    setChats([
      { title: 'Чат #1 для общения', value: '12345' },
      { title: 'Чат #2 для общения', value: '23456' },
    ]);
  }, []);

  const handleChange = (event, type) => {
    setData((prev) => ({ ...prev, [type]: event.target.value }));
  };

  const sendData = () => {
    console.log(data);

    // API запрос отправки на сервер данных
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    console.log(formData);

    setData(initState);
  };

  return (
    <Layout>
      <Box sx={{ ml: '320px', mt: '40px', mr: '100px' }}>
        <Box sx={{ mb: '90px' }}>
          <Typography
            variant="inherit"
            sx={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            Управление оповещениями через бота Telegram
          </Typography>
        </Box>

        <Box>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">
              Выбор чатов взводов
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.chat}
              label="chat"
              onChange={(e) => handleChange(e, 'chat')}
            >
              {chats.map((chat, index) => (
                <MenuItem key={index} value={chat.value}>
                  {chat.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ mt: '25px' }}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Тема сообщения"
              variant="filled"
              onChange={(e) => handleChange(e, 'theme')}
              value={data.theme}
            />
          </Box>

          <Box sx={{ mt: '25px' }}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Сообщение..."
              variant="filled"
              multiline
              rows={10}
              onChange={(e) => handleChange(e, 'message')}
              value={data.message}
            />
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ mt: '60px', fontSize: '20px' }}
          >
            <FileUploadForm file={data.file} setData={setData} />
            {/* <Button
              variant="contained"
              sx={{ mr: '32px', background: '#F8C950', fontWeight: 'bold' }}
            >
              Прикрепить файл
            </Button> */}
            <Button
              variant="contained"
              sx={{ width: '191px', background: '#3053E4', fontWeight: 'bold' }}
              onClick={() => sendData()}
            >
              Отправить
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
