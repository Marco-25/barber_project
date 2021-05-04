import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';


import uploadConfig from '@config/upload';
import routes from '@shared/infra/http/routes';
import AppError from "@shared/errors/AppError";

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});


app.listen(3333, () => console.log(`🚀 Back-end started in port 3333!`));
