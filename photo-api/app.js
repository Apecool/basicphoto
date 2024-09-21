const express = require('express');
const cors = require('cors');
const app = express();
const photoRoutes = require('./routes/photo');
const tagRoutes = require('./routes/tag');

app.use(express.json());
app.use(cors()); // Allow cross-origin requests
app.use('/api/photos', express.static('assets'));

// Routes
app.use('/api', photoRoutes);
app.use('/api', tagRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
