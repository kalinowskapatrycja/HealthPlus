<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Blog</title>
    <link rel="stylesheet" href="reset.css" type="text/css">
    <link rel="stylesheet" href="style.css" type="text/css">
</head>

<body>
    <header>
        <nav>
            <ul id="top">
                <li class="t"><a href="home.html">Home</a></li>
                <li class="t"><a href="projects.html">Projects</a></li>
                <li class="t"><a href="viewBlog.php">Blog</a></li>
        </nav>
    </header>
    <aside>
    <div id="addpost">
        <a href="iflogged.php">
            <input type="submit" value="Add Post">
        </a>
    </div>
    <div id="logout">
        <a href="logout.php">
            <input type="submit" value="Logout">
        </a>
    </div>
    </aside>
    <h3>Posts</h3>
    <?php
    $host = "127.0.0.1";
    $user = "root";
    $password = '';
    $db_name = "blog";

    $con = mysqli_connect($host, $user, $password, $db_name);
    $sql = "SELECT timestamp, date, time, title, body FROM post";
    $result = mysqli_query($con, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $array[] = $row;
        }

        usort($array, function ($x, $y) {
            return $y['timestamp'] <=> $x['timestamp'];
        });

        $i = 0;
        while ($i < count($array)) {
            echo "<article id='blogposts'>" .
                "<section id='datetime'><p>" . $array[$i]["date"] . " " . $array[$i]["time"] . "</p></section>" .
                "<section><h3 id='title'>" . $array[$i]["title"] . "</h3></section>" .
                "<section id='body'><p>" . $array[$i]["body"] . "</p></section></article> <hr>";
            $i++;
        }
    } else {
        echo "<p id='noposts'>There is nothing yet!</h3>";
    }
    ?>
    <footer>
        <i>Copyright © 2022 Patrycja Kalinowska</i>
    </footer>
</body>

</html>