
import createError from 'http-errors';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './modules/mongodb.js';
import router from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

app.listen(process.env.PORT || 3000, async () => {
  //connecting to database
  await connectDB();
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});

export default app