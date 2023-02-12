<script>
	let isDark;
</script>

<nav>
	<ul>
		<li><a href="/">Sakawa</a></li>
	</ul>
	<ul>
		<li><a href="/login">Login(暫時)</a></li>
		<li role="list">
			<a href="/transaction" aria-haspopup="listbox">交易系統</a>
			<ul role="listbox">
				<li><a href="/transaction/record">交易紀錄</a></li>
				<li><a href="/transaction/leaderboard">餘額排行榜</a></li>
				<li><a href="/transaction/main">金錢遊戲</a></li>
			</ul>
		</li>
		<li>
			<details role="list">
				<summary aria-haspopup="listbox" role="link">小工具</summary>
				<ul role="listbox">
					<li><a href="/tools/clock">全球時間</a></li>
					<li><a href="#">其他...</a></li>
				</ul>
			</details>
		</li>
		<li>
			<input type="checkbox" role="switch" name="theme" bind:checked={isDark} />
		</li>
	</ul>
</nav>
