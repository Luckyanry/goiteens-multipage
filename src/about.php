<?php

if (file_exists('crm/params.ini')) {
    $params = parse_ini_file('crm/params.ini');
} else {
    $params = [];
}
?>
