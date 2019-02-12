using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

//using MailKit.Net.Smtp;
//using MimeKit;

namespace TopEvent.Common.Services
{
    public class EmailSettings
    {
        public string MailServer { get; set; }
        public int MailPort { get; set; }
        public string SenderName { get; set; }
        public string Sender { get; set; }
        public string Password { get; set; }
        public string ToEmail { get; set; }
    }

    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }

    public class EmailService : IEmailSender
    {

        public EmailSettings _emailSettings { get; }

        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public Task SendEmailAsync(string email, string subject, string message)
        {

            Execute(email, subject, message).Wait();
            return Task.FromResult(0);
        }

        public async Task Execute(string email, string subject, string message)
        {
            try
            {

                MailAddress fromMailAddress = new MailAddress(_emailSettings.Sender, _emailSettings.SenderName, Encoding.UTF8);
                MailAddress toMailAddress = string.IsNullOrEmpty(email)
                    ? new MailAddress(_emailSettings.ToEmail)
                    : new MailAddress(email);

                MailMessage mail = new MailMessage(fromMailAddress, toMailAddress);

                //mail.To.Add(new MailAddress(toEmail));
                //mail.CC.Add(new MailAddress(_emailSettings.CcEmail));

                mail.Subject = "Test sending message from TopEvent - " + subject;
                mail.Body = message;
                mail.IsBodyHtml = true;
                mail.BodyEncoding = Encoding.UTF8;
                mail.SubjectEncoding = Encoding.UTF8;

                //mail.Priority = MailPriority.High;

                using (SmtpClient smtp = new SmtpClient(_emailSettings.MailServer, _emailSettings.MailPort))
                {
                    smtp.Credentials = new NetworkCredential(_emailSettings.Sender, _emailSettings.Password);
                    smtp.EnableSsl = true;
                    await smtp.SendMailAsync(mail);
                }
            }
            catch (Exception ex)
            {
               
            }
        }
    }
}
