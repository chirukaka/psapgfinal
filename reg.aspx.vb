Imports System.Data.OleDb
Imports System.Configuration
Imports System.Web.Services
Imports Newtonsoft.Json
Imports Xamarin.Essentials

Public Class reg
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub
    <WebMethod()>
    Public Shared Function InsertRecord(ByVal Fname As String, ByVal Lname As String, ByVal Country As String, ByVal age As String, ByVal Email As String, ByVal PsaNo As String, ByVal passport As String, ByVal Gender As String, ByVal code As String) As String


        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim e As New semail
        Dim g As New Class1
        Dim ee As String
        Dim dt As DataTable
        Dim dt2 As String
        Dim ds As New ArrayList
        Dim tr As String
        Dim pass2 As String
        Dim n As String = "Pending"
        Dim fa As String = "False"
        Dim JSONString As String = "Failed to Stored"
        Dim mquery As String = "Select * from Table1 where Email='" + Email + "'"
        Dim dr As DataTableReader

        dt = d.GetAccessDataQry(DB_Name, mquery)

        If dt.Rows.Count > 0 Then
            JSONString = "This Email already exists."


        Else
            Dim appo As String = NextAppointmentNumber()
                MsgBox(appo)
                pass2 = d.EncodePasswordToBase64(code)

            Dim Qry As String = "Insert into Table1 (RegNo,FirstName,LastName,Country,Age,Email,PSAMembershipNo,PassPort,Gender,Pass,Payment,Flag)
        values('" + appo + "','" + Fname + "','" + Lname + "','" + Country + "','" + age + "','" + Email + "','" + PsaNo + "',
        '" + passport + "','" + Gender + "','" + pass2 + "','" + n + "','" + fa + "')"


            dt2 = d.ExecAccessQry(DB_Name, Qry)
            If dt2 > 0 Then


                JSONString = "Success"
                'ee = g.sendEmail(Email, Fname, Lname, appo, code)

            End If
            'JSONString = "Successfully Stored"

        End If



            Return JSONString

    End Function
    ' *********************Get Next Registraion number Number************************************
    <WebMethod()>
    Public Shared Function NextAppointmentNumber() As String
        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim reg_number As Integer = 0
        Dim reg As String
        Dim dt As DataTable
        Dim id As String
        Dim dr As DataTableReader
        Dim apt_id As Integer
        Dim JSONString As String
        Dim Qry As String = "SELECT MAX(RegNo) FROM Table1"
        dt = d.GetAccessDataQry(DB_Name, Qry)

        dr = dt.CreateDataReader
        While dr.Read
            id = dr(0).ToString
            Exit While
        End While
        Dim len As String = id.Length()
        If len = 0 Then
            id = "PSAPG23100"
        Else
            'MsgBox(id)
            id = id.Substring(7)
            'MsgBox(id)
            reg_number = Convert.ToInt32(id + 1)
            'MsgBox(reg_number)
            id = "PSAPG23" + reg_number.ToString()
            'MsgBox(id)
        End If


        Return id
    End Function
    '******************************Send mail function created separately*********************** 
    <WebMethod()>
    Public Shared Function smail(ByVal toVal As String, ByVal username As String, ByVal username2 As String, ByVal reg As String, ByVal code As String) As String


        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim g As New Class1
        Dim ee As String

        Dim JSONString As String = "Success"

        ee = g.sendEmail(toVal, username, username2, reg, code)



        Return JSONString

    End Function

End Class



