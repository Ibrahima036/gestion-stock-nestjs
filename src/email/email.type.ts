export interface EmailType {
  to: string;
  subject: string;
  templateName: string;
  context: {};
  file?: string;
  attachments?: [];
}
