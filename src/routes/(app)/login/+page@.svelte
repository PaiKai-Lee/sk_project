<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData}*/
	export let form;

  $: console.log(form)
</script>

<div class="container-fluid h-full flex-center">
	<article>
		<hgroup>
			<h2>登入</h2>
			<p />
		</hgroup>
		<form method="POST" use:enhance>
			<input type="text" placeholder="email" name="email" aria-invalid={form?.emilValid ?? null} value={form?.email ?? ''} required />
			<input
				type="password"
				placeholder="password"
        name="password"
				aria-invalid={form?.pwd ?? null}
				autocomplete="off"
        on:input={(e) => e.target.ariaInvalid = null}
				required
			/>
			<button>登入</button>
		</form>
		<footer>
			<a href="#" data-tooltip="沒有這個功能，請找管理員" data-placement="right" class="secondary">註冊帳號</a>
		</footer>
	</article>
</div>
