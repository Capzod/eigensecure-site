import nodemailer from 'nodemailer'
import formidable from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const form = new formidable.IncomingForm()

  form.parse(req, async (err, fields, files) => {

    if (err) {
      return res.status(500).json({ error: err })
    }

    const file = files.cv?.[0]

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })

    try {

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        replyTo: fields.email,
        subject: 'New Job Application 🚀',
        text: `
Name: ${fields.fullName}
Email: ${fields.email}
Phone: ${fields.phone}
Role: ${fields.currentRole}
Expertise: ${fields.expertise}
Experience: ${fields.experience}
Notice Period: ${fields.noticePeriod}
Portfolio: ${fields.portfolio}
Why eigenSecure: ${fields.note}
        `,
        attachments: [
          {
            filename: file.originalFilename,
            content: fs.readFileSync(file.filepath)
          }
        ]
      })

      res.status(200).json({ message: 'Mail Sent' })

    } catch (error) {
      res.status(500).json({ error })
    }

  })
}