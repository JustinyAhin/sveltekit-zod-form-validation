<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let form: ActionData;

	$: console.log(form);

	// 	{
	//     "error": true,
	//     "errors": [
	//         {
	//             "field": "name",
	//             "message": "String must contain at least 1 character(s)"
	//         },
	//         {
	//             "field": "email",
	//             "message": "Invalid email"
	//         },
	//         {
	//             "field": "email",
	//             "message": "String must contain at least 1 character(s)"
	//         }
	//     ]
	// }
</script>

<svelte:head>
	<title>Form validation with Sveltekit and Zod</title>
</svelte:head>

<h1>Form validation with Sveltekit and Zod</h1>

<form use:enhance>
	<input type="text" name="name" placeholder="Name" aria-label="Name" />
	<select name="role" aria-label="Role" required>
		<option value="frontend-engineer">Frontend Engineer</option>
		<option value="backend-engineer">Backend Engineer</option>
		<option value="fullstack-engineer">Fullstack Engineer</option>
		<option value="architect">Architect</option>
	</select>
	<input type="email" name="email" placeholder="Email" />

	<button type="submit">Submit</button>

	{#if form?.error}
		<ul class="notice-error">
			{#each form.errors as error}
				<li>{error.message}</li>
			{/each}
		</ul>
	{/if}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		padding: 3rem;
		width: 50%;
		background-color: #f1f5f9;
	}

	form > * {
		margin-bottom: 0.5rem;
	}

	form input,
	form select {
		padding: 0.5rem;
		border: 1px solid #d1d5db;
		border-radius: 0.25rem;
	}

	form button[type='submit'] {
		color: white;
		font-weight: bold;
		width: fit-content;
		padding: 0.5rem;
		border: 1px solid #d1d5db;
		border-radius: 0.25rem;
		background-color: #4f46e5;
		cursor: pointer;
	}

	.notice-error {
		list-style: none;
		padding: 0;
	}

	.notice-error > * {
		margin-bottom: 0.75rem;
	}

	.notice-error li {
		padding: 1rem;
		background-color: #fda4af;
	}
</style>
