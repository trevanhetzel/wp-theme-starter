<?php

	// Remove WP emoji stuff
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
    
  // Custom post types
  require get_template_directory() . '/inc/post-types.php';

  // Enable post thumbnails
  require get_template_directory() . '/inc/thumbnails.php';

?>
