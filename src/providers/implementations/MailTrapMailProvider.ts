
import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailTrapMailProvider implements IMailProvider {
    private transporter : Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port : 2525,
            auth : {
                user : "961b61b7e33683",
                pass : "53c686b4b439f0"
            }
        })
    }
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
              name: message.to.name,
              address: message.to.email,
            },
            from: {
              name: message.from.name,
              address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
          })
    }
}