import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import path, { join } from 'path';

interface SendEmailPayload {
  [key: string]: any;
}
@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmailTemplate(
    to: string,
    subject: string,
    templateName: string,
    payload: SendEmailPayload,
    file?: string,
  ) {
    console.log({ ...payload });
    await this.mailerService.sendMail({
      to,
      subject,
      template: templateName,
      context: {
        ...payload,
      },
      attachments: file
        ? [
            {
              path: join(__dirname, '../../templates', file),
            },
          ]
        : null,
    });
  }
}
