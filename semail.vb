Imports System
Imports System.Configuration
Imports System.IO
Imports System.Net
Imports System.Net.Mail
Imports System.Runtime.InteropServices
Imports Outlook = Microsoft.Office.Interop.Outlook
Imports Office = Microsoft.Office.Core




Public Class semail

    'Public Function startOutlook(ByVal toVal As String, ByVal subjectVal As String, ByVal bodyVal As String)
    'Param - toVal as String: email address of recipient
    'Param - subjectVal as String: subject string
    'Param - bodyVal as String: Email Text
    Public Function startOutlook(ByVal toVal As String, ByVal username As String, ByVal userid As String) As String
        'Return a reference to the MAPI layer
        Dim ol As New Outlook.Application()
        Dim ns As Outlook.NameSpace
        Dim fdMail As Outlook.MAPIFolder
        Dim e As String = "Successfully Send"
        ns = ol.GetNamespace("MAPI")

        'Logs on the user
        'Profile: This is a string value that indicates what MAPI profile to use for logging on. Leave blank if using the currently logged on user, or set to an empty string ("") if you wish to use the default Outlook Profile. 
        'Password: The password for the indicated profile. Leave blank if using the currently logged on user, or set to an empty string ("") if you wish to use the default Outlook Profile password. 
        'ShowDialog: Set to True to display the Outlook Profile dialog box. 
        'NewSession: Set to True to start a new session. Set to False to use the current session. 
        ns.Logon("", "", True, True)

        'create a new MailItem object
        Dim newMail As Outlook.MailItem

        'gets defaultfolder for my Outlook Outbox
        fdMail = ns.GetDefaultFolder(Outlook.OlDefaultFolders.olFolderOutbox)

        'assign values to the newMail MailItem
        newMail = fdMail.Items.Add(Outlook.OlItemType.olMailItem)
        newMail.Subject = "Register Successfully for PSA PHOTO GATHERING"
        newMail.HTMLBody = "<b>Thank you " + username + " for your interest in PSA PHOTO GATHERING.</b> <br/> <br/> <font color=blue>Your id is:" + userid + "</br></font>"
        newMail.To = toVal
        newMail.SaveSentMessageFolder = fdMail


        'adds it to the draft box
        'newMail.Save()

        'adds it to the outbox
        newMail.Send()

        Return e

    End Function

End Class
