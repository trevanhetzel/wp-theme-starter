<?php
/* Template Name: Home */
get_header(); ?>

<?php include( locate_template( 'partials/page-title.php' ) ); ?>

<section class="w-full py-14 lg:py-32 px-7">
  <div class="max-w-5xl mx-auto">
  <?php
    if ( have_posts() ) {
      while ( have_posts() ) {
        the_post();
      }
    }
    ?>
  </div>
</section>

<?php get_footer(); ?>