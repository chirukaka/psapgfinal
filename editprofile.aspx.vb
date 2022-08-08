Imports System.Data.OleDb
Imports System.Configuration
Imports System.Web.Services
Imports Newtonsoft.Json
Public Class editprofile
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub
    <WebMethod()>
    Public Shared Function EditRecord(ByVal Reg As String) As String
        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim dt As DataTable

        Dim tr As String
        Dim p As String
        Dim s As String = "Failed"
        Dim Qry As String = "SELECT FirstName,LastName,Email,Hotel,IndianPhoneNo,RoomNo,Transport,DOA,TOA,Health from Table1 where RegNo='" + Reg + "'"
        Dim ee As String
        Dim JSONString As String
        Dim dr As DataTableReader

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
    Public Shared Function SaveRecord(ByVal Reg As String, ByVal fname As String, ByVal lname As String, ByVal email As String, ByVal hotel As String, ByVal lphone As String,
                                      ByVal room As String, ByVal transport As String, ByVal doa As String, ByVal toa As String, ByVal health As String) As String
        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim dt As DataTable

        Dim tr As String
        Dim p As String
        Dim s As String = "Failed"
        Dim Qry As String = "UPDATE Table1 set FirstName='" + fname + "',LastName='" + lname + "',Email='" + email + "',Hotel='" + hotel + "',RoomNo='" + room + "',
                            IndianPhoneNo='" + lphone + "',Transport='" + transport + "',DOA='" + doa + "',TOA='" + toa + "',Health='" + health + "'where RegNo='" + Reg + "'"
        Dim ee As String
        Dim JSONString As String
        Dim dr As DataTableReader

        dt = d.GetAccessDataQry(DB_Name, Qry)
        'Try

        '    JSONString = String.Empty
        '    JSONString = JsonConvert.SerializeObject(dt)
        'Catch ex As Exception
        '    Dim e As String = ex.Message
        'End Try
        'Return JSONString


    End Function
End Class