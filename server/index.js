require('dotenv').config()
const express = require('express')
const cors = require('cors')
const multer = require('multer')
const nodemailer = require('nodemailer')

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage })

app.post('/api/join-us', upload.single('cv'), async (req, res) => {

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
      to: 'vishalvk2507@gmail.com',
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
      Why EigenSecure: ${note}
      `,
      attachments: [
        {
          filename: file.originalname,
          path: file.path
        }
      ]
    })

    res.json({ message: 'Mail Sent' })

  } catch (err) {
    res.status(500).json({ error: err })
  }
})

app.listen(5000, () => console.log("Server running on 5000"))