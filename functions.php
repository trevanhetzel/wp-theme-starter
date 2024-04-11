<?php
// Custom post types
require get_template_directory() . '/inc/post-types.php';

// Helper functions
require get_template_directory() . '/inc/helpers.php';

// Menus
require get_template_directory() . '/inc/register-menus.php';

// Enable post thumbnails
require get_template_directory() . '/inc/image-sizes.php';

// Insert ld-json structured data script
require get_template_directory() . '/inc/ld-json.php';

// Custom menu walkers
require get_template_directory() . '/inc/walkers.php';

// Custom UI "components"
foreach (glob(get_template_directory() . '/components/*.php') as $filename) {
	include $filename;
}

// Enqueue scripts
function custom_scripts() {
	wp_enqueue_script(
		'custom-bundle',
		esc_url( get_template_directory_uri() ) . '/app.min.js',
		array(),
		'1.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'custom_scripts' );

// Enqueue styles
function custom_styles() {
	wp_enqueue_style(
		'custom-styles',
		esc_url( get_template_directory_uri() ) . '/style.css',
		array(),
		'1.0'
	);
}
add_action( 'wp_enqueue_scripts', 'custom_styles' );

// Custom site title
function custom_title($title) {
	if (is_front_page()) {
		return get_bloginfo('description') . ' — ' . get_bloginfo('name');
	}

	return $title;
}
add_filter('pre_get_document_title', 'custom_title');

// Filter the except length
function custom_excerpt_length( $length ) {
	return 29;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

// Filter the excerpt "read more" string.
function custom_excerpt_more( $more ) {
	return '...';
}
add_filter( 'excerpt_more', 'custom_excerpt_more' );