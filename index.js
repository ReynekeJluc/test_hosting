const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
	res.end(`
		<div>
			<nav>
				<a href="/">Home</a>
				<a href="/favor">Favor</a>
			</nav>
			<h1>Home</h1>
		</div>
	`);
});

app.get('/favor', (req, res) => {
	res.end(`
		<div>
			<nav>
				<a href="/">Home</a>
				<a href="/favor">Favor</a>
			</nav>
			<h1>Favor</h1>
		</div>
	`);
});

app.listen(PORT, () => {
	console.log('Server has been started...');
});
