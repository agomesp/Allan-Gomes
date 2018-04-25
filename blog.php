<?php
    require_once("php/conecta.php");
    require_once("php/banco-admin.php");

    $posts = getPosts($conexao);
?>

<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="../css/normalize.min.css">
        <link rel="stylesheet" href="../css/blog.css">

        <script src="../js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body id="body">
        <section>
            <h1>BLOG</h1>
            <?php 
                while ($post = mysqli_fetch_assoc($posts)) {
            ?>
                <div class="post-main">
                    <div class="container-img-article" style="background: url(../<?= $post['img']?>) center;">
                        &nbsp;
                    </div>
                    <h2><?= $post['titulo']?></h2>
                    <p><?php echo nl2br($post['descricao'])?></p>
                    <a href="../blog/<?= $post['id']?>-<?= $post['titulo']?>"><button>Leia Mais</button></a>
                </div>    
            <?php
                }
            ?>

        </section>

        <aside>
            <a href="../index.html"><img id="img-logo" src="../img/logo-png.png"></a>
            <nav id="main-nav">
                <ul>
                    <li class="li-main1"><a href="../index.html#container-works">WORKS <img class="icon-nav icon-monitor" src="../img/monitor-icon3.png"></a></li> 
                    <hr id="hr-nav1">
                    <li class="li-main2"><a href="../index.html#container-about">ABOUT <img class="icon-nav icon-person" src="../img/person-icon2.png"></a></li>
                    <hr id="hr-nav1">
                    <li class="li-main3"><a href="../index.html#container-footer">CONTACT <img class="icon-nav icon-mail" src="../img/mail-icon2.png"></a></li>
                    <hr id="hr-nav1">
                    <li class="li-main4"><a href="../blog/">BLOG <img class="icon-nav icon-blog" src="../img/blog-icon2.png"></a></li>
                    <hr id="hr-nav1">
                </ul>
            </nav>    
        </aside>
        <div class="clearfix"></div>
        <footer>
            <nav>
                <ul>
                    <li><a href="../index.html#container-works">WORKS</a></li>
                    <li><a href="../index.html#container-about">ABOUT</a></li>
                    <li><a href="../index.html#container-footer">CONTACT</a></li>
                    <li><a href="../blog/">BLOG</a></li>
                </ul>
            </nav>
        </footer>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <script src="../js/blog.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>
</html>
