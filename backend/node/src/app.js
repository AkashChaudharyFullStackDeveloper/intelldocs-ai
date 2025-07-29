const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const registerRoutes = require('./routes/register');
const docRoutes = require('./routes/document');
const dashboardRoutes = require('./routes/dashboard');
const approvalRoutes = require('./routes/approval');
const notificationRoutes = require('./routes/notification');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/intelldocs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/documents', docRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/approvals', approvalRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(4000, () => console.log('Node API running on port 4000'));
