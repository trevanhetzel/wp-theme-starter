<?php

// Site URL
function url () {
	print bloginfo('url');
}

// Prevent widows
function widont( $str = '' ) {
	// Strip spaces.
	$str = trim( $str );
	// Find the last space.
	$space = strrpos( $str, ' ' );
	// If there's a space then replace the last on with a non breaking space.
	if ( false !== $space ) {
		$str = substr( $str, 0, $space ) . '&nbsp;' . substr( $str, $space + 1 );
	}

	return $str;
}
?>