<?php start_capture(); ?>
<?php get_header(); ?>

<?php
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
	}
}
?>

<?php get_footer(); ?>
<?php $result = stop_capture(); ?>
<?php echo $result; ?>
