import nodemailer from 'nodemailer'
import multer from 'multer'

export const config = {
  api: {
    bodyParser: false,
  },
}

const upload = multer({
  storage: multer.memoryStorage()
})

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  upload.single('cv')(req, res, async function (err) {

    if (err) return res.status(500).json({ error: err })

    const {
      fullName,
      email,
      phone,
      expertise,
      experience,
      currentRole,
      portfolio,
      noticePeriod,
      note
    } = req.body

    const file = req.file

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
        replyTo: email,
        subject: 'New Job Application 🚀',
        text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Role: ${currentRole}
Expertise: ${expertise}
Experience: ${experience}
Notice Period: ${noticePeriod}
Portfolio: ${portfolio}
Why eigenSecure: ${note}
        `,
        attachments: [
          {
            filename: file.originalname,
            content: file.buffer
          }
        ]
      })

      res.status(200).json({ message: 'Mail Sent' })

    } catch (error) {
      res.status(500).json({ error })
    }

  })
}