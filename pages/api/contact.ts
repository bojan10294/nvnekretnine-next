import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, phone } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      html: `<h3>Poruka sa sajta!</h3>
      <p>Ime: <strong>${name}</strong></p>
      <p>E-mail: <strong>${email}</strong></p>
      <p>Telefon: <strong>${phone}</strong></p>
      <p>Poruka: <strong>${message}</strong></p>`,
      subject: `NV Nekretnine Kontakt - ${name}`,
      to: 'bojan.site@gmail.com'
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
