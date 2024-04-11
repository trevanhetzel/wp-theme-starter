<?php
$address = get_field('address', 'option');
$city = get_field('city', 'option');
$state = get_field('state', 'option');
$zip = get_field('zip', 'option');
$google_maps = get_field('google_maps_link', 'option');
$phone = get_field('phone_number', 'option');
$contact_email = get_field('contact_email', 'option');
?>

	<footer class="w-full">
		<div class="mx-auto max-w-7xl px-7 py-16 xl:py-20">
			<?php if (have_rows('social_media_links', 'option')) : ?>
				<ul class="flex mt-10 md:mt-0 md:ml-28">
					<?php while (have_rows('social_media_links', 'option')) : the_row(); ?>
						<?php $title = get_sub_field('platform_title'); ?>
						<?php $link = get_sub_field('link'); ?>
						<?php $icon = get_sub_field('svg_icon'); ?>

						<li class="mr-4 md:mr-5 md:[&_svg]:size-9 hover:[&_path]:fill-gold [&_path]:transition-all">
							<a href="<?php echo $link; ?>" target="_blank" title="<?php echo $title; ?>">
								<?php echo $icon; ?>
							</a>
						</li>
					<?php endwhile; ?>
				</ul>
			<?php endif; ?>

			<?php wp_nav_menu( array(
				'menu_class'			=> '',
				'container'				=> '',
				'theme_location'	=> 'header-menu',
				'walker'					=> new Footer_Menu_Walker
			) ); ?>
			</div>

			<p>
				<a href="<?php echo $google_maps; ?>" target="_blank" class="hover:text-gold transition-colors">
					<?php echo $address; ?><br>
					<?php echo $city; ?>, <?php echo $state; ?> <?php echo $zip; ?>
				</a>
			</p>

			<p>
				<a href="tel:<?php echo $phone; ?>" class="hover:text-gold transition-colors"><?php echo $phone; ?></a><br>
				<a href="mailto:<?php echo $contact_email; ?>" class="hover:text-gold transition-colors"><?php echo $contact_email; ?></a>
			</p>
		</div>
	</footer>

	<p>
		<span>&copy; Copyright <?php echo date("Y"); ?> Grand Venue</span> <span class="hidden md:inline">|</span> <span><a href="https://hetzelcreative.com" target="_blank" class="text-purple hover:underline">Site by Hetzel&nbsp;Creative</span>
	</p>
	
	<?php wp_footer(); ?>
	</body>
</html>
