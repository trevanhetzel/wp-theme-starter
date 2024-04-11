<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo wp_get_document_title(); ?></title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=Vidaloka&display=swap" rel="stylesheet">

	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/meta/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/meta/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/meta/favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/meta/site.webmanifest">

	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
	<meta property="og:locale" content="en_US">
	<meta property="og:type" content="website">
	<meta property="og:title" content="<?php echo wp_get_document_title(); ?>">
	<meta property="og:url" content="<?php echo wp_get_canonical_url(); ?>">
	<meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>">
	<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/meta/og.jpg">
	<meta property="og:image:width" content="2560">
	<meta property="og:image:height" content="1451">
	<meta property="og:image:type" content="image/jpeg">
	<meta name="twitter:card" content="summary_large_image">

	<?php wp_head(); ?>
</head>
		
	<body <?php body_class(); ?>>
		<header class="w-full">
			<section class='max-w-7xl mx-auto'>
				<a href="<?php echo url(); ?>">
					<img src="<?php echo get_template_directory_uri(); ?>/images/logo@2x.png" alt="" width="" height="">
				</a>
				
				<nav>
					<?php wp_nav_menu( array( 'theme_location' => 'header-menu', 'menu_class' => 'nav-list', 'container' => '' ) ); ?>
				</nav>
				
				<button>
					<span></span>
				</button>
			</section>
		</header>
		