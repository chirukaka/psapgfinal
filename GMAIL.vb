Imports System
Imports System.Collections.Generic
Imports System.ComponentModel
Imports System.Data
Imports System.Drawing
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports System.Windows.Forms
Imports Google.Apis.Auth.OAuth2
Imports Google.Apis.Gmail.v1
Imports Google.Apis.Services
Imports Google.Apis.Util.Store
Imports System.IO
Imports System.Threading
'Imports System.Net.Mime.MediaTypeNames

Public Class GMAIL

    Private Scopes As String() = {GmailService.Scope.GmailSend}
    Private ApplicationName As String = "psamail"


    Private Function Base64UrlEncode(ByVal input As String) As String
        Dim data = Encoding.UTF8.GetBytes(input)
        Return Convert.ToBase64String(data).Replace("+", "-").Replace("/", "_").Replace("=", "")
    End Function

    Public Function sendEmail(ByVal toVal As String, ByVal username As String, ByVal userid As String) As String

        Dim credential As UserCredential

        'Dim Application As Object

        Dim jsonPath As String = HttpContext.Current.Server.MapPath("bin") + "/credentials.json"
        Using stream As FileStream = New FileStream(jsonPath, FileMode.Open, FileAccess.Read)
            Dim path As String = Environment.GetFolderPath(Environment.SpecialFolder.Personal)
            path = (path + ".credentials/gmail-dotnet-quickstart.json")
            credential = GoogleWebAuthorizationBroker.AuthorizeAsync(GoogleClientSecrets.Load(stream).Secrets, Scopes, "user", CancellationToken.None, New FileDataStore(path, True)).Result
        End Using

        Dim message As String = $"To: {toVal}\r\nSubject: {username}\r\nContent-Type: text/html;charset=utf-8\r\n\r\n<h1>{userid}</h1>"
        Dim service = New GmailService(New BaseClientService.Initializer() With {
            .HttpClientInitializer = credential,
            .ApplicationName = ApplicationName
        })
        Dim msg = New Google.Apis.Gmail.v1.Data.Message()
        msg.Raw = Base64UrlEncode(message.ToString())
        service.Users.Messages.Send(msg, "me").Execute()
        MsgBox("Your email has been successfully sent !", "Message")

    End Function

End Class
