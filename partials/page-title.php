<section class="w-full">
  <div class="max-w-5xl mx-auto px-7 text-center">
    <h1>
      <?php
      if (get_field('title')) {
			  the_field('title');
      } else {
        the_title();
      }
      ?>
    </h1>

    <?php if (get_field('subtitle')) : ?>
      <h3><?php the_field('subtitle'); ?></h3>
    <?php endif; ?>
  </div>
</section>