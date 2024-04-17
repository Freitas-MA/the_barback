// pages/api/setCookie.js
import { serialize, parse } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function setCookie(req: NextApiRequest, res: NextApiResponse) {
  const { cocktailId } = req.body;

  // Obter o cookie existente
  const cookies = parse(req.headers.cookie || '');
  const favoriteCocktails = cookies.favoriteCocktails ? JSON.parse(cookies.favoriteCocktails) : [];

  // Adicionar o novo ID de coquetel ao array
  favoriteCocktails.push(cocktailId);

  // Definir o cookie novamente
  res.setHeader(
    'Set-Cookie',
    serialize('favoriteCocktails', JSON.stringify(favoriteCocktails), {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })
  );

  res.status(200).json({ message: 'Cookie set' });
}
