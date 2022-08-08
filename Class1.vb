

Imports System.Net
Imports System.Net.Mail


Class Class1



    'Public Function sendEmail(ByVal toVal As String, ByVal username As String, ByVal userid As String) As String
    '    SendEmail()
    'End Function

    Public Function sendEmail(ByVal toVal As String, ByVal username As String, ByVal username2 As String, ByVal reg As String, ByVal code As String) As String
        Dim smtpAddress As String = "smtp.gmail.com"
        Dim portNumber As Integer = 587
        Dim re As String = "Success"
        Dim enableSSL As Boolean = True
        Dim emailFromAddress As String = "chiranjit.eaffinity@gmail.com"
        Dim password As String = "kdqyeirvzugqtfap"
        Dim emailToAddress As String = toVal
        Dim subject As String = "Confirmation of Registration of PSA Photo Gathering 2023."
        'Dim body As String = "<b>Thank you " + username + " for your interest in PSA PHOTO GATHERING.</b> <br/> <br/>" + "<font color=blue><b>and Your Password is:" + code + "</b></br></font>"
        Dim body As String = "<p>Hello " + username + " " + username2 + ", Your registration for the PSA Photo Gathering 2023 being organized at Jaisalmer,
                            India is confirmed. Your Login ID is: <b> " + reg + " </b>and your Password is: <b>" + code + "</b>., You can now proceed for the payment of 
                            the participation fee. Follow the onscreen instructions to complete the payment process. You will receive an email of your payment confirmation from us in due course of time.
                            The PSA-PG 2023 Team Welcomes you to Jaisalmer, India</p>"
        Using mail As MailMessage = New MailMessage()
            mail.From = New MailAddress(emailFromAddress)
            mail.[To].Add(emailToAddress)
            mail.Subject = subject
            mail.Body = body
            mail.IsBodyHtml = True

            Using smtp As SmtpClient = New SmtpClient(smtpAddress, portNumber)
                smtp.Credentials = New NetworkCredential(emailFromAddress, password)
                smtp.EnableSsl = enableSSL
                smtp.Send(mail)
                Return re
            End Using
        End Using
        Return re
    End Function
    Public Function reset(ByVal toVal As String, ByVal userid As String, ByVal code As String) As String
        Dim smtpAddress As String = "smtp.gmail.com"
        Dim portNumber As Integer = 587
        Dim re As String = "Successfully Send"
        Dim enableSSL As Boolean = True
        Dim emailFromAddress As String = "chiranjit.eaffinity@gmail.com"
        Dim password As String = "kdqyeirvzugqtfap"
        Dim emailToAddress As String = toVal
        Dim subject As String = "Hello"
        Dim body As String = "<b>Restored UserId and Password.</b> <br/> <br/>" + "<font color=blue><b>Your id is:" + userid + "</br></br></b></font> <font color=blue><b>and Your Password is:" + code + "</b></br></font>"
        Using mail As MailMessage = New MailMessage()
            mail.From = New MailAddress(emailFromAddress)
            mail.[To].Add(emailToAddress)
            mail.Subject = subject
            mail.Body = body
            mail.IsBodyHtml = True

            Using smtp As SmtpClient = New SmtpClient(smtpAddress, portNumber)
                smtp.Credentials = New NetworkCredential(emailFromAddress, password)
                smtp.EnableSsl = enableSSL
                smtp.Send(mail)
                Return re
            End Using
        End Using

    End Function

    '*******************************Admin Send EMail*********************************************
    Public Function amail(ByVal toVal As String, ByVal code As String) As String
        Dim smtpAddress As String = "smtp.gmail.com"
        Dim portNumber As Integer = 587
        Dim re As String = "Mail has been sent successfully."
        Dim enableSSL As Boolean = True
        Dim emailFromAddress As String = "chiranjit.eaffinity@gmail.com"
        Dim password As String = "kdqyeirvzugqtfap"
        Dim emailToAddress As String = toVal
        Dim subject As String = "Hello"
        Dim body As String = code
        Using mail As MailMessage = New MailMessage()
            mail.From = New MailAddress(emailFromAddress)
            mail.[To].Add(emailToAddress)
            mail.Subject = subject
            mail.Body = body
            mail.IsBodyHtml = True

            Using smtp As SmtpClient = New SmtpClient(smtpAddress, portNumber)
                smtp.Credentials = New NetworkCredential(emailFromAddress, password)
                smtp.EnableSsl = enableSSL
                smtp.Send(mail)
                Return re
            End Using
        End Using

    End Function
End Class
