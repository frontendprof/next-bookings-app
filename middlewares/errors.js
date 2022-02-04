import ErrorHandler from '../utils/errorHandler';

export const onError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;

  // mongoose cast error
  if (err.name === 'CastError') {
    const message = `Resource has not found. Invalid ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
