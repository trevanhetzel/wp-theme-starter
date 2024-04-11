<?php

// Main menu
function register_main_menu() {
	register_nav_menu('header-menu',__( 'Header Menu' ));
}

add_action( 'init', 'register_main_menu' );

?>
