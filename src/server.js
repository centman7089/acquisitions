import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` app listening on port http://localhost:${PORT}`);
});

//"dev": "node --watch index.js" //restart server on file changes
