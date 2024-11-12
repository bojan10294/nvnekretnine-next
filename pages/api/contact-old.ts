import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, website, message, phone } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      auth: {
        pass: 'zgwvdpjsjydcrytl',
        user: 'test.be.sirius@gmail.com'
      },
      service: 'gmail'
    });

    await transporter.sendMail({
      from: 'matko tata',
      html: `<p>Ime: ${name}</p>
      <p>Email: ${email}</p>
      <p>Poruka: ${message}</p>
      <p>Website: ${website}</p>
      <p>Telefon: ${phone}</p>`,
      subject: 'Sirius message',
      to: 'matejanajdanov0@gmail.com'
    });

    await transporter.sendMail({
      from: 'Sirius',
      html: 'Thanks for reaching our company. We will try to reach you as fast as possible.',
      subject: `Hi ${name}, thanks for reaching sirius`,
      to: email
    });

    return res.status(200);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};
