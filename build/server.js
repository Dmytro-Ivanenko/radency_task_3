import app from './main.js';
const { PORT = 3000 } = process.env;
app.listen(PORT);
console.log('Database connection successful');
console.log(`Server running. Use our API on port: ${PORT}`);
//# sourceMappingURL=server.js.map