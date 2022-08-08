Imports System.Data.OleDb
Imports System.Configuration
Imports System.Web.Services
Imports Newtonsoft.Json
Imports System.Data

Public Class login
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub
    <WebMethod()>
    Public Shared Function FindRecord(ByVal Reg As String, ByVal Pass As String) As String
        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim dt As DataTable
        Dim ds As New ArrayList
        Dim tr As String
        Dim Qry As String
        Dim pay As String
        Dim s As String
        Reg = Reg.Trim()
        If (Reg <> "PSAPGMASTER") Then
            Reg = Reg.Substring(7)
            If (IsNumeric(Reg)) Then
                Reg = "PSAPG23" + Reg
                Qry = "SELECT Pass,Payment from Table1 where RegNo='" + Reg + "'"
            Else
                s = "It is a invalid Registration Number"
                Return s
            End If
        Else
            If (Reg = "PSAPGMASTER") Then
                Qry = "SELECT Pass,Payment from Admin where RegNo='" + Reg + "'"
            Else
                s = "It is a invalid Registration Number"
                Return s
            End If
        End If
            Dim e As String = Reg
        Dim p As String = Pass
        Dim dr As DataTableReader

        dt = d.GetAccessDataQry(DB_Name, Qry)
        dr = dt.CreateDataReader
        While dr.Read

            tr = dr(0).ToString
            pay = dr(1).ToString
            tr = d.DecodeFrom64(tr)

            If tr = p And pay = "Approved" Then
                s = "success"


            Else
                's = "Check your Password or Your payment is not done"
                s = "Check your Password"
            End If

            Exit While
        End While


        Return s
    End Function

    'forget paaword section
    <WebMethod()>
    Public Shared Function RecoverRecord(ByVal Mail As String) As String
        Dim DB_Name As String = "regform.mdb"
        Dim d As New DAL
        Dim dt As DataTable
        Dim e As New Class1
        Dim tr As String
        Dim rNo As String


        Dim Qry As String = "SELECT Pass,RegNo from Table1 where Email='" + Mail + "'"
        Dim ee As String

        Dim dr As DataTableReader

        dt = d.GetAccessDataQry(DB_Name, Qry)
        dr = dt.CreateDataReader
        While dr.Read

            tr = dr(0).ToString
            rNo = dr(1).ToString



            Exit While
        End While
        Dim tr2 As String = tr
        If (tr2.Length > 8) Then
            tr = d.DecodeFrom64(tr)
            ee = e.reset(Mail, rNo, tr)
        Else
            ee = "Your Email Is Not Registered"
        End If
        Return ee
    End Function
End Class