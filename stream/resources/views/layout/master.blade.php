<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css">
    <link rel="stylesheet" href="/css/app.css">

</head>
<body>
<div id="app">
    @include('layout.header')
    <div class="container">
        <router-view></router-view>
    </div>
</div>


<script src="/js/app.js"></script>
</body>
</html>
