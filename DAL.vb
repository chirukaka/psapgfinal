Imports System.Data
Imports System.Data.OleDb
Imports System.Xml
Imports System.Web

Public Class DAL
    'CONNECT & READ FROM MS ACCESS DB
    Public Function GetAccessDataQry(ByVal DBName As String, ByVal Query As String) As DataTable
        Dim MSAccessConn As New OleDbConnection
        Dim cmd As New OleDbCommand
        Dim dr As OleDbDataReader = Nothing
        Dim dt As DataTable = New DataTable

        Dim DBPath = HttpContext.Current.Server.MapPath(DBName)

        If DBPath <> "" Then
            MSAccessConn = New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source='" + DBPath + "'")
        End If
        Try
            MSAccessConn.Open()
            cmd = New OleDbCommand(Query, MSAccessConn)
            dr = cmd.ExecuteReader()
            dt.Load(dr)
        Catch
        Finally
            MSAccessConn.Close()
        End Try
        Return dt
    End Function

    'EXECUTE QUERY IN ACCESS DB
    Public Function ExecAccessQry(ByVal DBName As String, ByVal Query As String) As Integer
        Dim MSAccessConn As New OleDbConnection
        Dim cmd As New OleDbCommand
        Dim dt As DataTable = New DataTable
        Dim cnt As Integer
        Dim DBPath = HttpContext.Current.Server.MapPath(DBName)

        If DBPath <> "" Then
            MSAccessConn = New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source='" + DBPath + "'")
        End If
        Try
            MSAccessConn.Open()
            cmd = New OleDbCommand(Query, MSAccessConn)
            cnt = cmd.ExecuteNonQuery()
        Catch ex As Exception
            MsgBox(ex.ToString)
        Finally
            MSAccessConn.Close()
        End Try
        Return cnt
    End Function

    'Password Encription
    Public Shared Function EncodePasswordToBase64(ByVal password As String) As String
        Try
            Dim encData_byte As Byte() = New Byte(password.Length - 1) {}
            encData_byte = System.Text.Encoding.UTF8.GetBytes(password)
            Dim encodedData As String = Convert.ToBase64String(encData_byte)
            Return encodedData
        Catch ex As Exception
            Throw New Exception("Error in base64Encode" & ex.Message)
        End Try
    End Function

    'Password Decription
    Public Function DecodeFrom64(ByVal encodedData As String) As String
        Dim encoder As System.Text.UTF8Encoding = New System.Text.UTF8Encoding()
        Dim utf8Decode As System.Text.Decoder = encoder.GetDecoder()
        Dim todecode_byte As Byte() = Convert.FromBase64String(encodedData)
        Dim charCount As Integer = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length)
        Dim decoded_char As Char() = New Char(charCount - 1) {}
        utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0)
        Dim result As String = New String(decoded_char)
        Return result
    End Function
End Class
