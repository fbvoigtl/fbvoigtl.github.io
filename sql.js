// Wait for the DOM to be fully loaded before setting up listeners
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOCK DATABASE ---
    // This is our "database," just a JavaScript object
    // with arrays of objects representing tables.
const db = {
        users: [
            { id: 1, name: 'Alice', age: 25, city: 'London', status: 'active' },
            { id: 2, name: 'Bob', age: 32, city: 'Paris', status: 'active' },
            { id: 3, name: 'Charlie', age: 28, city: 'New York', status: 'inactive' },
            { id: 4, name: 'David', age: 45, city: 'London', status: 'active' },
            { id: 5, name: 'Eve', age: 32, city: 'Tokyo', status: 'active' },
            { id: 6, name: 'Frank', age: 19, city: 'Paris', status: 'active' },
            { id: 7, name: 'Grace', age: 51, city: 'New York', status: 'active' },
            { id: 8, name: 'Henry', age: 40, city: 'Berlin', status: 'active' },
            { id: 9, name: 'Ivy', age: 22, city: 'London', status: 'inactive' },
            { id: 10, name: 'Jack', age: 28, city: 'Berlin', status: 'active' },
            { id: 11, name: 'Kate', age: 65, city: 'Sydney', status: 'active' },
            { id: 12, name: 'Leo', age: 30, city: 'Tokyo', status: 'active' },
            { id: 13, name: 'Mia', age: 29, city: 'Paris', status: 'active' },
            { id: 14, name: 'Noah', age: 42, city: 'Berlin', status: 'inactive' },
            { id: 15, name: 'Olivia', age: 22, city: 'New York', status: 'active' },
            { id: 16, name: 'Peter', age: 55, city: 'London', status: 'active' },
            { id: 17, name: 'Quinn', age: 38, city: 'Sydney', status: 'active' },
            { id: 18, name: 'Rachel', age: 27, city: 'Paris', status: 'active' },
            { id: 19, name: 'Sam', age: 33, city: 'Tokyo', status: 'active' },
            { id: 20, name: 'Tom', age: 48, city: 'Berlin', status: 'active' },
        ],
        products: [
            { id: 101, name: 'Laptop', category: 'Electronics', price: 1200, stock: 15 },
            { id: 102, name: 'Coffee Mug', category: 'Homeware', price: 15, stock: 120 },
            { id: 103, name: 'Book: SQL Basics', category: 'Media', price: 20, stock: 75 },
            { id: 104, name: 'Headphones', category: 'Electronics', price: 150, stock: 30 },
            { id: 105, name: 'Smartphone', category: 'Electronics', price: 700, stock: 25 },
            { id: 106, name: 'Keyboard', category: 'Electronics', price: 80, stock: 50 },
            { id: 107, name: 'Mouse', category: 'Electronics', price: 40, stock: 65 },
            { id: 108, name: 'T-Shirt', category: 'Apparel', price: 25, stock: 200 },
            { id: 109, name: 'Running Shoes', category: 'Apparel', price: 90, stock: 80 },
            { id: 110, name: 'Desk Chair', category: 'Homeware', price: 180, stock: 10 },
            { id: 111, name: 'Monitor', category: 'Electronics', price: 300, stock: 22 },
            { id: 112, name: 'USB-C Cable', category: 'Electronics', price: 12, stock: 150 },
            { id: 113, name: 'Notebook', category: 'Stationery', price: 5, stock: 300 },
            { id: 114, name: 'Pen Set', category: 'Stationery', price: 8, stock: 250 },
            { id: 115, name: 'Backpack', category: 'Apparel', price: 50, stock: 40 },
            { id: 116, name: 'Book: Advanced JS', category: 'Media', price: 45, stock: 50 },
            { id: 117, name: 'Desk Lamp', category: 'Homeware', price: 35, stock: 0 }, // Out of stock!
            { id: 118, name: 'Smartwatch', category: 'Electronics', price: 250, stock: 30 },
            { id: 119, name: 'Water Bottle', category: 'Homeware', price: 22, stock: 90 },
            { id: 120, name: 'Yoga Mat', category: 'Sports', price: 30, stock: 60 },
        ],
        orders: [
            { order_id: 501, user_id: 1, product_id: 101, quantity: 1, order_date: '2023-01-15' },
            { order_id: 502, user_id: 2, product_id: 103, quantity: 3, order_date: '2023-01-17' },
            { order_id: 503, user_id: 1, product_id: 102, quantity: 2, order_date: '2023-01-20' },
            { order_id: 504, user_id: 3, product_id: 105, quantity: 1, order_date: '2023-02-01' },
            { order_id: 505, user_id: 5, product_id: 108, quantity: 5, order_date: '2023-02-05' },
            { order_id: 506, user_id: 8, product_id: 104, quantity: 1, order_date: '2023-02-07' },
            { order_id: 507, user_id: 8, product_id: 107, quantity: 1, order_date: '2023-02-07' },
            { order_id: 508, user_id: 10, product_id: 113, quantity: 10, order_date: '2023-02-12' },
            { order_id: 509, user_id: 15, product_id: 109, quantity: 1, order_date: '2023-02-15' },
            { order_id: 510, user_id: 18, product_id: 102, quantity: 1, order_date: '2023-02-20' },
            { order_id: 511, user_id: 20, product_id: 111, quantity: 2, order_date: '2023-02-21' },
            { order_id: 512, user_id: 1, product_id: 115, quantity: 1, order_date: '2023-03-01' },
            { order_id: 513, user_id: 4, product_id: 110, quantity: 1, order_date: '2023-03-02' },
            { order_id: 514, user_id: 7, product_id: 120, quantity: 1, order_date: '2023-03-05' },
            { order_id: 515, user_id: 19, product_id: 118, quantity: 1, order_date: '2023-03-10' },
            { order_id: 516, user_id: 12, product_id: 105, quantity: 1, order_date: '2023-03-11' },
            { order_id: 517, user_id: 2, product_id: 116, quantity: 1, order_date: '2023-03-12' },
            { order_id: 518, user_id: 10, product_id: 114, quantity: 2, order_date: '2023-03-15' },
            { order_id: 519, user_id: 5, product_id: 102, quantity: 4, order_date: '2023-03-18' },
            { order_id: 520, user_id: 8, product_id: 106, quantity: 1, order_date: '2023-03-20' },
            { order_id: 521, user_id: 16, product_id: 119, quantity: 2, order_date: '2023-03-21' },
            { order_id: 522, user_id: 17, product_id: 117, quantity: 1, order_date: '2023-03-22' }, // Order for out-of-stock item
            { order_id: 523, user_id: 13, product_id: 108, quantity: 3, order_date: '2023-03-25' },
            { order_id: 524, user_id: 4, product_id: 101, quantity: 1, order_date: '2023-04-01' },
            { order_id: 525, user_id: 7, product_id: 112, quantity: 5, order_date: '2023-04-02' },
        ]
    };

    // --- 2. GET DOM ELEMENTS ---
    const queryInput = document.getElementById('sql-query');
    const runButton = document.getElementById('run-button');
    const outputDiv = document.getElementById('results-output');
    const messageDiv = document.getElementById('results-message');

    // --- 3. EVENT LISTENER ---
    runButton.addEventListener('click', handleQuery);

    function handleQuery() {
        const query = queryInput.value.trim();
        // Clear previous results
        outputDiv.innerHTML = '';
        messageDiv.innerHTML = '';

        if (!query) {
            displayError("Please enter a query.");
            return;
        }

        try {
            const result = parseAndExecute(query);
            displayResults(result);
        } catch (error) {
            displayError(error.message);
        }
    }

 // --- 4. DER KERN: PARSER & EXECUTOR (MIT BESSEREN FEHLERN) ---
    function parseAndExecute(query) {
        // Normalisieren der Abfrage (mehrfache Leerzeichen, Leerzeichen am Anfang/Ende)
        const normalizedQuery = query.replace(/\s+/g, ' ').trim();
        const upperQuery = normalizedQuery.toUpperCase();

        // --- Bessere Fehlerprüfungen ---
        // 1. Prüfen, ob die Abfrage überhaupt Text enthält
        if (!normalizedQuery) {
            // Dies wird eigentlich schon in handleQuery() abgefangen, aber sicher ist sicher.
            throw new Error("Bitte gib eine Abfrage ein.");
        }

        // 2. Prüfen, ob sie mit SELECT beginnt
        if (!upperQuery.startsWith('SELECT ')) {
            throw new Error("Syntax-Fehler: Jede Abfrage muss mit 'SELECT' beginnen.");
        }

        // 3. Prüfen, ob ein FROM enthalten ist
        if (!upperQuery.includes(' FROM ')) {
            throw new Error("Syntax-Fehler: Der Abfrage fehlt ein 'FROM'-Schlüsselwort.");
        }

        // 4. Prüfen, ob sie mit einem Semikolon endet
        if (!normalizedQuery.endsWith(';')) {
            throw new Error("Syntax-Fehler: Jede Abfrage muss mit einem Semikolon (';') enden.");
        }
        // --- Ende der Fehlerprüfungen ---

        // Regex, um SELECT, FROM und optional WHERE zu erfassen
        // (Das Semikolon am Ende ist jetzt erforderlich)
        const sqlRegex = /SELECT\s+(.+?)\s+FROM\s+([a-zA-Z0-9_]+)(?:\s+WHERE\s+(.+))?;/i;
        const match = normalizedQuery.match(sqlRegex);

        if (!match) {
            // Dieser Fehler tritt jetzt nur noch bei komplexeren Syntaxproblemen auf
            throw new Error('Ungültige SQL-Syntax. Überprüfe die Struktur deiner SELECT-, FROM- oder WHERE-Klausel.');
        }

        const [_, selectClause, fromClause, whereClauseWithSemicolon] = match;
        const tableName = fromClause.trim();

        // Das optionale WHERE-Segment kann das Semikolon enthalten, entfernen wir es
        let whereClause = undefined;
        if (whereClauseWithSemicolon) {
            whereClause = whereClauseWithSemicolon.replace(/;$/, '').trim();
        }

        // 1. --- FROM ---
        if (!db[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        }
        // Kopie der Daten, um das Original nicht zu verändern
        let data = [...db[tableName]];

        // 2. --- WHERE (Filtern) ---
        if (whereClause) {
            data = data.filter(row => {
                return evaluateCondition(row, whereClause);
            });
        }

        // 3. --- SELECT (Spalten auswählen) ---
        const columns = selectClause.split(',').map(c => c.trim());

        if (columns.length === 1 && columns[0] === '*') {
            // SELECT *
            return data;
        } else {
            // SELECT col1, col2
            return data.map(row => {
                const newRow = {};
                for (const col of columns) {
                    if (row.hasOwnProperty(col)) {
                        newRow[col] = row[col];
                    } else {
                        throw new Error(`Fehler: Spalte '${col}' nicht in Tabelle '${tableName}' gefunden.`);
                    }
                }
                return newRow;
            });
        }
    }
    // --- 5. HELPER FUNCTIONS ---

    // A very simple WHERE clause evaluator
    // Supports: col = val, col > val, col < val
    function evaluateCondition(row, condition) {
        // Find the operator (=, >, <)
        let operator;
        if (condition.includes('=')) {
            operator = '=';
        } else if (condition.includes('>')) {
            operator = '>';
        } else if (condition.includes('<')) {
            operator = '<';
        } else {
            throw new Error(`Unsupported WHERE condition: '${condition}'. Only '=', '>', '<' are supported.`);
        }

        const [colName, valStr] = condition.split(operator).map(s => s.trim());
        
        if (!row.hasOwnProperty(colName)) {
            throw new Error(`Column '${colName}' not found in WHERE clause.`);
        }

        const rowValue = row[colName];
        
        // Clean the value (remove quotes from strings)
        const compareValueStr = valStr.replace(/['"]/g, '');

        // Check if the value is a number or string
        let compareValue;
        if (!isNaN(parseFloat(compareValueStr)) && isFinite(compareValueStr)) {
            compareValue = parseFloat(compareValueStr); // It's a number
        } else {
            compareValue = compareValueStr; // It's a string
        }
        
        // Perform comparison
        switch (operator) {
            case '=':
                // Use == for type coercion (e.g., 25 == "25")
                return rowValue == compareValue;
            case '>':
                return rowValue > compareValue;
            case '<':
                return rowValue < compareValue;
            default:
                return false;
        }
    }

    // Renders the results as an HTML table
    function displayResults(result) {
        if (result.length === 0) {
            messageDiv.textContent = 'Query executed successfully. 0 rows returned.';
            return;
        }

        messageDiv.textContent = `Query executed successfully. ${result.length} rows returned.`;

        // Create table
        const table = document.createElement('table');
        
        // Create table header
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        const headers = Object.keys(result[0]);
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        // Create table body
        const tbody = table.createTBody();
        result.forEach(rowData => {
            const row = tbody.insertRow();
            headers.forEach(header => {
                const cell = row.insertCell();
                cell.textContent = rowData[header];
            });
        });

        outputDiv.appendChild(table);
    }

    // Shows an error message
    function displayError(message) {
        outputDiv.innerHTML = `<div class="error">${message}</div>`;
    }

});