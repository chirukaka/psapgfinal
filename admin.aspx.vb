Imports System.Web.Services
Imports System.Data.OleDb
Imports Newtonsoft.Json
Public Class admin
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub
    <WebMethod()>
    Public Shared Function GetDetails() As String

        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim res As Integer = 0
        Dim apt_num As String = ""
        Dim dt As DataTable
        Dim id As Integer = 0
        Dim ds As New ArrayList
        Dim tr As String
        Dim JSONString As String
        Dim Qry As String = "Select RegNo,Firstname & ' ' & Lastname AS Name,Email,Gender,Country,Age,PSAMembershipNo,
Payment from Table1 where FLag <>'True'"

        dt = d.GetAccessDataQry(DB_Name, Qry)
        Try

            JSONString = String.Empty
            JSONString = JsonConvert.SerializeObject(dt)
        Catch ex As Exception
            Dim e As String = ex.Message
        End Try

        Return JSONString
    End Function
    <WebMethod()>
    Public Shared Function UpdateFeeStatus(ByVal Entrant_ID As String, ByVal Status As String) As String

        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim res As Integer = 0
        Dim apt_num As String = ""
        Dim dt As DataTable
        Dim id As Integer = 0
        Dim ds As New ArrayList
        Dim tr As String
        Dim JSONString As String
        Dim Qry As String = "Update Table1 Set Payment='" + Status + "'where RegNo='" + Entrant_ID + "' "

        dt = d.GetAccessDataQry(DB_Name, Qry)
        Try

            JSONString = String.Empty
            JSONString = JsonConvert.SerializeObject(dt)
        Catch ex As Exception
            Dim e As String = ex.Message
        End Try

        Return JSONString
    End Function
    <WebMethod()>
    Public Shared Function UpdatePrintStatus(ByVal Entrant_ID As String, ByVal Status As String) As String

        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim res As Integer = 0
        Dim apt_num As String = ""
        Dim dt As DataTable
        Dim id As Integer = 0
        Dim ds As New ArrayList
        Dim tr As String
        Dim JSONString As String
        Dim Qry As String = "Update Table1 Set Payment='" + Status + "'where RegNo='" + Entrant_ID + "' "

        dt = d.GetAccessDataQry(DB_Name, Qry)
        Try

            JSONString = String.Empty
            JSONString = JsonConvert.SerializeObject(dt)
        Catch ex As Exception
            Dim e As String = ex.Message
        End Try

        Return JSONString
    End Function
    <WebMethod()>
    Public Shared Function DeleteUser(ByVal Entrant_ID As String) As String

        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim res As Integer = 0
        Dim apt_num As String = ""
        Dim dt As String
        Dim id As Integer = 0
        Dim ds As New ArrayList
        Dim tr As String
        Dim JSONString As String
        Dim Qry As String = "UPDATE Table1 SET Flag='True' WHERE RegNo='" + Entrant_ID + "'"

        dt = d.ExecAccessQry(DB_Name, Qry)
        If dt > 0 Then
            JSONString = "Success"
        End If


        Return JSONString
    End Function

    <WebMethod()>
    Public Shared Function SendMail(ByVal Email As String, ByVal Body As String) As String

        Dim DB_Name As String = "regform.mdb"
        Dim JSONString As String
        Dim g As New Class1
        Dim ee As String
        ee = g.amail(Email, Body)

        Return ee
    End Function
End Class