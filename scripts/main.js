:root {
  --bg-dark: #1a1a2e;
  --bg-card: #16213e;
  --text-light: #e6e6e6;
  --accent: #4cc9f0;
  --profit: #4ade80;
  --loss: #f87171;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-light);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 10px;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #444;
  border-radius: 4px;
  color: var(--text-light);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #444;
}

th {
  background: rgba(0, 0, 0, 0.2);
}

.price-input {
  width: 80px;
}

.results h2 {
  margin: 0.5rem 0;
}
