import nodemailer from 'nodemailer'

export default async (req, res) => {
    const {Name, Email, Message, Telegram } = req.body
    
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: process.env.user,
            pass: process.env.pass
        }

    })

    try {
        const email = await transporter.sendMail({
            from: Email,
            to:'katezi@bk.ru',
            subject:`Новое сообщение от ${Name}`,
            html: `<p>New SFChina message</p><br />
            <p><strong>Имя: </strong>${Name}</p><br />
            <p><strong>Telegram: </strong>${Telegram}</p><br />
            <p><strong>Сообщение: </strong>${Message}</p><br />
            <p><strong>Email отправителя: </strong>${Email}</p><br />
          
            `
        })
        console.group("Message sent", email.messageId)
    } catch(err){
        console.log(err)
    }

    res.status(200).json(req.body)
}