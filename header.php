<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php if(is_front_page() ) { ?> Site Title<?php } ?> <?php wp_title(''); ?> | <?php bloginfo('name'); ?></title>
	
	<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body>
