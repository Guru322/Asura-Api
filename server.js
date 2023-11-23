import express from 'express';
import { asuraSearch, asuraPopular, asuraPopularToday, asuraLastUpdate, asuraEpDownloader, asuraDetails, asuraPdf } from './module.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/asura/search', asuraSearch);
app.get('/asura/popular', asuraPopular);
app.get('/asura/popularToday', asuraPopularToday);
app.get('/asura/lastUpdate', asuraLastUpdate);
app.get('/asura/epDownloader', asuraEpDownloader);
app.get('/asura/details', asuraDetails);
app.get('/asura/pdf', asuraPdf);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
