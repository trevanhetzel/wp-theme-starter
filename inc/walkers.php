<?php
class Main_Menu_Walker extends Walker_Nav_Menu {
	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
		$class_names = $value = '';
		$custom_class_names = 'font-bold text-sm pl-10 lg:pl-16 text-white uppercase lg:text-md';
    $class_names = in_array('current_page_item', $item->classes) || in_array('current-menu-item', $item->classes) ? '[&_a]:border-b [&_a]:border-white ' . $custom_class_names : $custom_class_names;
		$output .= $indent . '<li id="menu-item-'. $item->ID . '"' . 'class="' . $class_names .'">';
    
    $attributes  = '';

		! empty( $item->attr_title )
			and $attributes .= ' title="'  . esc_attr( $item->attr_title ) .'"';
		! empty( $item->target )
			and $attributes .= ' target="' . esc_attr( $item->target     ) .'"';
		! empty( $item->xfn )
			and $attributes .= ' rel="'    . esc_attr( $item->xfn        ) .'"';
		! empty( $item->url )
			and $attributes .= ' href="'   . esc_attr( $item->url        ) .'"';

		$title = apply_filters( 'the_title', $item->title, $item->ID );

		$item_output = $args->before
			. "<a $attributes class='pb-1.5 hover:text-light-gold transition-colors'>"
			. $args->link_before
			. widont($title)
			. '</a> '
			. $args->link_after
			. $args->after;

		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	}
}

class Mobile_Menu_Walker extends Walker_Nav_Menu {
	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
		$class_names = $value = '';
		$custom_class_names = 'w-full flex justify-center text-base transition-all text-l text-black font-bold uppercase';
    $class_names = in_array('current_page_item', $item->classes) ? '[&_a]:border-b-2 [&_a]:border-black ' . $custom_class_names : $custom_class_names;
		$output .= $indent . '<li id="menu-item-'. $item->ID . '"' . 'class="' . $class_names .'">';
    
    $attributes  = '';

		! empty( $item->attr_title )
			and $attributes .= ' title="'  . esc_attr( $item->attr_title ) .'"';
		! empty( $item->target )
			and $attributes .= ' target="' . esc_attr( $item->target     ) .'"';
		! empty( $item->xfn )
			and $attributes .= ' rel="'    . esc_attr( $item->xfn        ) .'"';
		! empty( $item->url )
			and $attributes .= ' href="'   . esc_attr( $item->url        ) .'"';

		$title = apply_filters( 'the_title', $item->title, $item->ID );

		$item_output = $args->before
			. "<a $attributes class='py-1.5 my-3 '>"
			. $args->link_before
			. $title
			. '</a> '
			. $args->link_after
			. $args->after;

		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	}
}

class Footer_Menu_Walker extends Walker_Nav_Menu {
	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
		$class_names = $value = '';
		$custom_class_names = 'font-bold text-right lg:text-left text-sm lg:text-md uppercase text-white transition-all hover:text-gold mb-5';
    $class_names = in_array('current_page_item', $item->classes) ? '!text-tan ' . $custom_class_names : $custom_class_names;
		$output .= $indent . '<li id="menu-item-'. $item->ID . '"' . 'class="' . $class_names .'">';
    
    $attributes  = '';

		! empty( $item->attr_title )
			and $attributes .= ' title="'  . esc_attr( $item->attr_title ) .'"';
		! empty( $item->target )
			and $attributes .= ' target="' . esc_attr( $item->target     ) .'"';
		! empty( $item->xfn )
			and $attributes .= ' rel="'    . esc_attr( $item->xfn        ) .'"';
		! empty( $item->url )
			and $attributes .= ' href="'   . esc_attr( $item->url        ) .'"';

		$title = apply_filters( 'the_title', $item->title, $item->ID );

		$item_output = $args->before
			. "<a $attributes>"
			. $args->link_before
			. $title
			. '</a> '
			. $args->link_after
			. $args->after;

		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	}
}
?>