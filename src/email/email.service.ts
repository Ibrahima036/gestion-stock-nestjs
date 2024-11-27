import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, name: string) {
    await this.mailerService.sendMail({
      to,
      subject,
      template: './welcome', // Le nom du template sans l'extension
      context: {
        name, // Données à injecter dans le template
      },
    });
  }
}
