// pages/api/contact.ts
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string) {
  try {
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
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { error: 'Failed to verify reCAPTCHA', success: false };
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // The body is already parsed by Next.js, no need for JSON.parse
    const { name, email, message, phone, recaptchaToken } = req.body;

    // Verify reCAPTCHA
    const recaptchaVerification = await verifyRecaptcha(recaptchaToken);

    if (!recaptchaVerification.success) {
      return res.status(400).json({
        details: recaptchaVerification,
        error: 'reCAPTCHA verification failed'
      });
    }

    // Optional: Check score if needed
    if (recaptchaVerification.score < 0.5) {
      return res.status(400).json({
        error: 'Suspicious activity detected',
        score: recaptchaVerification.score
      });
    }

    // Send email
    const { data, error: emailError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      html: `
        <h3>Poruka sa sajta!</h3>
        <p>Ime: <strong>${name}</strong></p>
        <p>E-mail: <strong>${email}</strong></p>
        <p>Telefon: <strong>${phone || 'Nije unet'}</strong></p>
        <p>Poruka: <strong>${message}</strong></p>
      `,
      subject: `NV Nekretnine Kontakt - ${name}`,
      to: 'nvnekretnine@gmail.com'
    });

    if (emailError) {
      console.error('Email sending error:', emailError);
      return res.status(400).json({
        details: emailError,
        error: 'Failed to send email'
      });
    }

    return res.status(200).json({
      data,
      message: 'Email sent successfully',
      success: true
    });
  } catch (error) {
    console.error('API route error:', error);
    return res.status(500).json({
      details: error instanceof Error ? error.message : 'Unknown error',
      error: 'Internal server error'
    });
  }
}
