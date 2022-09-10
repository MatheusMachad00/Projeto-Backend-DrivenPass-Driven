import { Request, Response } from 'express';
import * as creditCardServices from '../services/creditCardService'

export async function createCreditCard(req: Request, res: Response) {
  const { verifiedToken } = res.locals;
  const { cardNumber, cardName, cvv, expirationDate, password, isVirtual, type, title  } = req.body;
  let objectData = {
    userId: verifiedToken.id,
    cardNumber,
    cardName,
    cvv,
    expirationDate,
    password,
    isVirtual,
    type,
    title
  };

  await creditCardServices.createCreditCard(objectData);
  res.sendStatus(200);
};
