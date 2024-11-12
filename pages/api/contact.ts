// pages/api/contact.ts
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string) {
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
    }
  );

  const data = await response.json();
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, phone, recaptchaToken } = JSON.parse(
      req.body
    );

    // Verify reCAPTCHA first
    const recaptchaVerification = await verifyRecaptcha(recaptchaToken);

    if (!recaptchaVerification.success || recaptchaVerification.score < 0.5) {
      return res.status(400).json({
        error: 'reCAPTCHA verification failed'
      });
    }

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

    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
