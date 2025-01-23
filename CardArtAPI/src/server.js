const app = require('./app');
const { PORT } = require('./config/dotenv');

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`);
});
