<?php

add_theme_support( 'post-thumbnails', array('post', 'page', 'events') );

add_image_size( 'og', 1200, 630, array('center', 'center') ); // Do not remove - used for ld-json size
add_image_size( 'hero', 2880, 1632, array('center', 'center') );
add_image_size( 'about', 760, 900, array('center', 'center') );
add_image_size( 'gallery', 1400, 800, array('center', 'center') );
add_image_size( 'venue', 1060, 1090, array('center', 'center') );
add_image_size( 'featured', 1140, 620, array('center', 'center') );

?>
