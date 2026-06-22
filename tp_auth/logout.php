<?php
session_start();
session_destroy();
echo "You are finsihed";
header("refresh: 3, url=login.php");
