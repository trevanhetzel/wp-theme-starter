<?php
function add_ld_json() {
	$thumb = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'og');
	$og = get_bloginfo('url') . '/meta/og.jpg';
	$logo = get_bloginfo('url') . '/meta/logo.jpg';
	$image = $thumb ? $thumb[0] : $og;
	$title = wp_get_document_title();
	$site_url = wp_get_canonical_url();
	$name = get_bloginfo('name');
	$facebook_url = '';
	$social_media_urls = [];

	if (have_rows('social_media_links', 'option')) {
		while (have_rows('social_media_links', 'option')) {
			the_row();
			array_push($social_media_urls, get_sub_field('link'));
		}
	}

	$socials = json_encode($social_media_urls, JSON_UNESCAPED_SLASHES);

	$ld_json = <<< EOT
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": "{$site_url}",
				"url": "{$site_url}",
				"name": "{$title}",
				"isPartOf": {
					"@id": "{$site_url}#website"
				},
				"about": {
					"@id": "{$site_url}#organization"
				},
				"primaryImageOfPage": {
					"@id": "{$site_url}#primaryimage"
				},
				"image": {
					"@id": "{$site_url}#primaryimage"
				},
				"thumbnailUrl": "{$image}",
				"breadcrumb": {
					"@id": "{$site_url}#breadcrumb"
				},
				"inLanguage": "en-US",
				"potentialAction": [
					{
						"@type": "ReadAction",
						"target": [
							"{$site_url}"
						]
					}
				]
			},
			{
				"@type": "ImageObject",
				"inLanguage": "en-US",
				"@id": "{$site_url}#primaryimage",
				"url": "{$image}",
				"contentUrl": "{$image}",
				"width": 1200,
				"height": 630
			},
			{
				"@type": "BreadcrumbList",
				"@id": "{$site_url}#breadcrumb",
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Home"
					}
				]
			},
			{
				"@type": "WebSite",
				"@id": "{$site_url}#website",
				"url": "{$site_url}",
				"name": "{$name}",
				"description": "",
				"publisher": {
					"@id": "{$site_url}#organization"
				},
				"potentialAction": [
					{
						"@type": "SearchAction",
						"target": {
							"@type": "EntryPoint",
							"urlTemplate": "{$site_url}?s={search_term_string}"
						},
						"query-input": "required name=search_term_string"
					}
				],
				"inLanguage": "en-US"
			},
			{
				"@type": "Organization",
				"@id": "{$site_url}#organization",
				"name": "{$name}",
				"url": "{$site_url}",
				"logo": {
					"@type": "ImageObject",
					"inLanguage": "en-US",
					"@id": "{$site_url}#/schema/logo/image/",
					"url": "{$logo}",
					"contentUrl": "{$logo}",
					"width": 605,
					"height": 630,
					"caption": "{$name}"
				},
				"image": {
					"@id": "{$site_url}#/schema/logo/image/"
				},
				"sameAs": {$socials}
			}
		]
	}
	</script>
	EOT;

	echo $ld_json;
}
add_action('wp_head', 'add_ld_json', -1);
?>