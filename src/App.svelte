<script>
	import { onMount } from "svelte";

	let content;
	let names = [];
	let id;

	onMount(async () => {
		const res = await fetch(`/api/invite${location.search}`);

		if (res.ok) {
			const data = await res.json();

			id = data.id;
			content = data.content;
			names = [...names, ...data.invite.names];
		}
	});
</script>

<main>
	<div class="container">
		<div class="logo">
			<svg
				height="300px"
				width="300px"
				fill="rgb(33 34 35)"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				x="0px"
				y="0px"
				viewBox="0 0 100 100"
				enable-background="new 0 0 100 100"
				xml:space="preserve">
				<polygon
					fill="rgb(33 34 35)"
					points="81.956,24.364 81.053,20.853 66.204,11.421 64.898,11.421 65.902,9.816 66.104,5 64.098,7.508   64.098,5 60.284,11.321 60.284,45.234 55.568,52.559 25.569,50.886 18.044,56.17 22.458,58.779 19.549,63.496 24.265,74.131   27.476,77.141 27.676,82.059 29.883,92.691 30.786,95 33.896,95 31.589,92.091 32.894,75.234 45.234,76.939 54.967,75.234   57.174,92.895 59.48,95 62.09,95 59.682,91.99 62.893,76.539 67.607,73.328 77.141,52.859 74.029,24.666 80.05,24.867 " />
			</svg>
			<h1>The Piñata Party</h1>
		</div>
		{#if content}
			<div class="md">
				{@html content}
			</div>
		{/if}

		{#if id}
			<form action="#" id="rsvp-form">
				<p>Please RSVP below:</p>
				{#each names as { name }}
					<label for={name} class="checkbox">
						<span class="checkbox__input">
							<input type="checkbox" {name} />
							<span class="checkbox__control">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									aria-hidden="true"
									focusable="false">
									<path
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										d="M1.73 12.91l6.37 6.37L22.79 4.59" />
								</svg>
							</span>
						</span>
						<span class="radio__label">{name}</span>
					</label>
				{/each}

				<input type="hidden" name="id" value={id} />
				<button type="submit">Submit</button>
			</form>
		{/if}
	</div>
</main>
