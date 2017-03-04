<?php

// Remove WP emoji stuff
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

// Custom post types
require get_template_directory() . '/inc/post-types.php';

// Enable post thumbnails
require get_template_directory() . '/inc/thumbnails.php';

function starter_scripts() {
	wp_enqueue_script(
		'starter-bundle',
		esc_url( get_template_directory_uri() ) . '/bundle.js',
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