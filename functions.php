<?php
// Custom post types
require get_template_directory() . '/inc/post-types.php';

// Menus
require get_template_directory() . '/inc/menus.php';

// Enable post thumbnails
require get_template_directory() . '/inc/thumbnails.php';

function starter_scripts() {
	wp_enqueue_script(
		'starter-bundle',
		esc_url( get_template_directory_uri() ) . '/app.min.js',
		array(),
		'0.1',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'starter_scripts' );

function starter_styles() {
	wp_enqueue_style(
		'starter-styles',
		esc_url( get_template_directory_uri() ) . '/style.css',
		array(),
		'0.1'
	);
}
add_action( 'wp_enqueue_scripts', 'starter_styles' );

// Theme path
function path () {
	print site_url('/wp-content/themes/von-skvely-haus');
}

// Site URL
function url () {
	print bloginfo('url');
}
