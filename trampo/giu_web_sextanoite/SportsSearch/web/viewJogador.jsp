<%-- 
    Document   : viewJogador
    Created on : May 30, 2014, 10:45:23 PM
    Author     : giulianno
--%>

<%@page import="model.Jogador"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <title>Sports Search - Home</title>
        <meta name="generator" content="Bootply" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link href="css/styles.css" rel="stylesheet">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <script type="text/JavaScript" src="js/jquery-2.1.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/script.js"></script>
    </head>

    <body>
        <header class="navbar navbar-default navbar-static-top" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                    </button>
                    <a href="index.html" class="navbar-brand">Sports Search</a>
                </div>
                <nav class="collapse navbar-collapse" role="navigation">
                    <ul class="nav navbar-nav">

                    </ul>
                </nav>
            </div>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-md-3" id="leftCol">

                    <div class="well"> 
                        <ul class="nav nav-stacked" id="sidebar">
                            <li><a href="index.html#sec1" id="buscajogador">Buscar Jogadores</a></li>
                            <li><a href="index.html#sec2" id="buscatime">Buscar Times</a></li>
                            <li><a href="index.html#sec3" id="buscapremio">Buscar Prêmios</a></li>
                        </ul>
                    </div>

                </div>  
                <div class="col-md-9">
                    <div id="menu" class="panel panel-default">
                        <div class="panel-body">
                            <ul class="pagination">
                                <li class="disabled"><a href="#">&laquo;</a></li>
                                <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                                <li class="disabled"><span>1</span></li>
                                <li class="disabled"><span>2</span></li>
                                <li class="disabled"><span>3</span></li>
                                <li class="disabled"><span>4</span></li>
                            </ul>
                            <div class="rbusca well well-sm">$nomejogar</div>
                            <%
                                Jogador objJogadorBean = (Jogador)request.getAttribute("jogadorBean");
                                if (objJogadorBean != null) {
                            %>
                            <h4>Jogador:<br></h4>
                            <p>Nome: <%= objJogadorBean.getName() %></p>
                            <p>Sobrenome: <%= objJogadorBean.getLastName() %></p>
                            <%
                                }
                            %>
                            <div class="rbusca well well-sm">TECNICO</div>
                            <ul class="pagination">
                                <li class="disabled"><a href="#">&laquo;</a></li>
                                <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                                <li class="disabled"><span>1</span></li>
                                <li class="disabled"><span>2</span></li>
                                <li class="disabled"><span>3</span></li>
                                <li class="disabled"><span>4</span></li>
                            </ul>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>

        <div class="navbar navbar-default navbar-fixed-bottom">
            <div class="container">
                <p class="navbar-text pull-left">
                    Desenvolvimento para Web &mdash; Engenharia de Software 2 &mdash; Laboratório de Banco de Dados
                </p>
            </div>
        </div>
    </body>
</html>