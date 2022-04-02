import express from 'express';

const env = process.env;
const PORT = env.PORT || 3000;
const app = express();

app.get('/api/status', (req, res) => {
  return res.json({
    service: "Auth-api",
    status: "up",
    httpStatus: 200
  })
})
app.listen(PORT, () => console.info(`Server started at ${PORT}`))