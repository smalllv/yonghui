<?php

    //当前php页面的编码
    header('Content-Type:text/html; charset=utf-8');
    header('Access-Control-Allow-Origin:*');
    //链接数据库
    $con = mysqli_connect('localhost','root','','yonghui');
    //指定往数据库添加数据的编码
    mysqli_query($con,'set names utf8');

    $username = $_REQUEST['username'];

    $sql = "select * from zhuce where num = '$username' ";

    $query = mysqli_query($con , $sql);

    if($query && mysqli_num_rows($query)){
        echo '';
    }
    else{
        echo '还没有注册，请注册过再登录';
    }


