// Wait for the DOM to be fully loaded before setting up listeners
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOCK DATABASE ---
    const db = {
        users: [
            { id: 1, name: 'Alice', age: 25, city: 'London', status: 'active' },
            { id: 2, name: 'Bob', age: 32, city: null, status: 'active' },
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
            { order_id: 522, user_id: 17, product_id: 117, quantity: 1, order_date: '2023-03-22' },
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
        outputDiv.innerHTML = '';
        messageDiv.innerHTML = '';

        if (!query) {
            displayError("Bitte gib eine Abfrage ein.");
            return;
        }

        try {
            const result = parseAndExecute(query);
            displayResults(result);
        } catch (error) {
            displayError(error.message);
        }
    }

    // --- 4. DER KERN: DER "DISPATCHER" ---
    // Dieser bleibt schlank und leitet nur weiter.
// --- 4. DER KERN: DER "DISPATCHER" ---
    // --- 4. DER KERN: DER "DISPATCHER" ---
    function parseAndExecute(query) {
        const normalizedQuery = query.replace(/\s+/g, ' ').trim();
        const upperQuery = normalizedQuery.toUpperCase();

        if (!normalizedQuery.endsWith(';')) {
            throw new Error("Syntax-Fehler: Jede Abfrage muss mit einem Semikolon (';') enden.");
        }

        if (upperQuery.startsWith('SELECT ')) {
            return handleSelect(normalizedQuery);
        }

        if (upperQuery.startsWith('INSERT INTO ')) {
            return handleInsert(normalizedQuery);
        }
        
        if (upperQuery.startsWith('UPDATE ')) {
            return handleUpdate(normalizedQuery);
        }

        // --- NEUER BLOCK HINZUFÜGEN ---
        if (upperQuery.startsWith('DELETE FROM ')) {
            return handleDelete(normalizedQuery);
        }
        // --- ENDE DES NEUEN BLOCKS ---

        throw new Error(`Syntax-Fehler: Nicht unterstützter Befehlstyp. Beginne mit SELECT, INSERT INTO, UPDATE oder DELETE FROM.`);
    }

    // --- 5. BEFEHLS-HANDLER ---

    /**
     * Verarbeitet INSERT-Abfragen (unverändert)
     */
    /**
     * (AKTUALISIERT) Verarbeitet INSERT-Abfragen
     * Unterstützt: INSERT INTO table (col1) VALUES (val1)
     * UND         INSERT INTO table VALUES (val1_für_alle_cols)
     */
    function handleInsert(query) {
        // (NEUE REGEX) Die Spaltenliste (Gruppe 2) ist jetzt optional
        const insertRegex = /INSERT INTO\s+([a-zA-Z0-9_]+)(?:\s*\((.+?)\))?\s+VALUES\s*\((.+?)\);/i;
        const match = query.match(insertRegex);

        if (!match) {
            throw new Error('Ungültige INSERT-Syntax. Erwartet: INSERT INTO tabelle (spalten) VALUES (werte) ODER INSERT INTO tabelle VALUES (werte);');
        }

        // colStr (match[2]) ist jetzt 'undefined', wenn keine Spalten angegeben wurden
        const [_, tableName, colStr, valStr] = match;

        if (!db[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        }

        const values = valStr.split(',').map(v => v.trim());
        let columns;

        if (colStr) {
            // --- FALL 1: Spalten wurden angegeben (ALTER CODE) ---
            columns = colStr.split(',').map(c => c.trim());
            
            // Validierung: Existieren die angegebenen Spalten?
            if (db[tableName].length > 0) {
                const firstRow = db[tableName][0];
                for (const col of columns) {
                    if (!firstRow.hasOwnProperty(col)) {
                        throw new Error(`Fehler: Spalte '${col}' existiert nicht in Tabelle '${tableName}'.`);
                    }
                }
            }
        } else {
            // --- FALL 2: Spalten wurden NICHT angegeben (NEUER CODE) ---
            if (db[tableName].length === 0) {
                // Wir können die Struktur nicht erraten, wenn die Tabelle leer ist
                throw new Error(`Fehler: INSERT ohne Spaltenliste in eine leere Tabelle nicht möglich (Struktur unbekannt).`);
            }
            // Wir nehmen an, dass die Werte FÜR ALLE Spalten in der richtigen Reihenfolge geliefert werden
            columns = Object.keys(db[tableName][0]);
        }

        // --- Gemeinsame Logik ab hier ---
        
        // Prüfen, ob die Anzahl der Spalten und Werte übereinstimmt
        if (columns.length !== values.length) {
            if (colStr) {
                // Alter Fehler
                throw new Error(`Fehler: Die Anzahl der Spalten (${columns.length}) stimmt nicht mit der Anzahl der Werte (${values.length}) überein.`);
            } else {
                // Neuer, spezifischerer Fehler
                throw new Error(`Fehler: Die Anzahl der Werte (${values.length}) stimmt nicht mit der Tabellenstruktur (${columns.length} Spalten) überein.`);
            }
        }

        // Neue Zeile erstellen (unverändert)
        const newRow = {};
        for (let i = 0; i < columns.length; i++) {
            const col = columns[i];
            const valStr = values[i];
            
            let parsedValue;
            const cleanedValStr = valStr.replace(/['"]/g, ''); // Anführungszeichen entfernen

            if (!isNaN(parseFloat(cleanedValStr)) && isFinite(cleanedValStr)) {
                parsedValue = parseFloat(cleanedValStr); // Ist eine Zahl
            } else {
                parsedValue = cleanedValStr; // Ist ein String
            }

            newRow[col] = parsedValue;
        }

        // Neue Zeile hinzufügen (unverändert)
        db[tableName].push(newRow);

        // Erfolgsmeldung (unverändert)
        return { message: `1 Zeile erfolgreich in '${tableName}' eingefügt.` };
    }

    /**
     * (NEU) Verarbeitet SELECT-Abfragen über eine Pipeline.
     */
    /**
     * (AKTUALISIERT) Verarbeitet SELECT-Abfragen über eine Pipeline.
     * Enthält jetzt den 'DISTINCT'-Schritt.
     */
    function handleSelect(query) {
        // 1. PARSING: Abfrage in einen "Plan" umwandeln
        const plan = buildQueryPlan(query);

        // 2. EXECUTION: Die Pipeline Schritt für Schritt ausführen
        
        // a. FROM
        let data = executeFrom(plan.from);
        
        // b. WHERE
        if (plan.where) {
            data = executeWhere(data, plan.where);
        }

        // (zukünftiges GROUP BY käme hier hin)

        // c. SELECT (Berechnungen & Aliase)
        data = executeSelect(data, plan.select);

        // d. DISTINCT (NEUER SCHRITT)
        // Muss nach SELECT und vor ORDER BY ausgeführt werden
        if (plan.distinct) {
            data = executeDistinct(data);
        }

        // e. ORDER BY (Sortiert die *finalen* Daten)
        if (plan.orderBy) {
            data = executeOrderBy(data, plan.orderBy);
        }
        
        // (zukünftiges LIMIT käme hier hin)

        return data;
    }

    // --- 6. PARSING-HILFSFUNKTIONEN (NEU) ---

    /**
     * (NEU) Zerlegt die SELECT-Abfrage in ihre Teile (den "Plan").
     */
    /**
     * (AKTUALISIERT) Zerlegt die SELECT-Abfrage in ihre Teile (den "Plan").
     * Erkennt jetzt das 'DISTINCT'-Schlüsselwort.
     */
    function buildQueryPlan(query) {
        const plan = {};

        // 1. FROM (unverändert)
        const fromMatch = query.match(/FROM\s+([a-zA-Z0-9_]+)/i);
        if (!fromMatch) throw new Error("Syntax-Fehler: 'FROM'-Klausel nicht gefunden.");
        plan.from = fromMatch[1];

        // 2. SELECT (AKTUALISIERT für DISTINCT)
        const selectMatch = query.match(/SELECT\s+(.+?)\s+FROM/i);
        if (!selectMatch) throw new Error("Syntax-Fehler: 'SELECT'-Klausel nicht gefunden.");
        
        let selectClause = selectMatch[1].trim();

        // Prüfen, ob "DISTINCT" am Anfang steht
        if (selectClause.toUpperCase().startsWith('DISTINCT ')) {
            plan.distinct = true;
            // "DISTINCT " aus der Klausel entfernen, damit der Spalten-Parser funktioniert
            selectClause = selectClause.substring(9).trim(); // 9 ist die Länge von "DISTINCT "
        } else {
            plan.distinct = false;
        }
        
        plan.select = parseSelectColumns(selectClause);

        // 3. WHERE (unverändert)
        const whereMatch = query.match(/WHERE\s+(.+?)(?:\s+ORDER BY|;|$)/i);
        if (whereMatch) {
            plan.where = whereMatch[1].trim();
        }

        // 4. ORDER BY (unverändert)
        const orderByMatch = query.match(/ORDER BY\s+(.+?)(?:;|$)/i);
        if (orderByMatch) {
            plan.orderBy = parseOrderBy(orderByMatch[1]);
        }

        return plan;
    }

    /**
     * (NEU) Parst die Spalten-Ausdrücke aus der SELECT-Klausel.
     * (Aus der alten handleSelect-Funktion extrahiert)
     */
    function parseSelectColumns(selectClause) {
        const columnStrings = selectClause.split(',').map(c => c.trim());

        if (columnStrings.length === 1 && columnStrings[0] === '*') {
            return [{ expr: '*', alias: '*' }];
        }

        return columnStrings.map(colStr => {
            const asMatch = colStr.match(/\s+AS\s+(["'](.+?)["']|([a-zA-Z0-9_]+))$/i);
            if (asMatch) {
                const expr = colStr.substring(0, asMatch.index).trim();
                const alias = asMatch[2] || asMatch[3];
                return { expr: expr, alias: alias };
            } else {
                return { expr: colStr, alias: colStr };
            }
        });
    }

    /**
     * (NEU) Parst die ORDER BY-Klausel.
     */
    function parseOrderBy(orderByClause) {
        const parts = orderByClause.trim().split(/\s+/);
        // Entfernt Anführungszeichen, falls vorhanden (z.B. ORDER BY "new Age")
        const column = parts[0].replace(/["']/g, '');
        let direction = 'ASC';

        if (parts.length > 1 && parts[1].toUpperCase() === 'DESC') {
            direction = 'DESC';
        }
        return { column: column, direction: direction };
    }


    // --- 7. EXECUTION-PIPELINE-FUNKTIONEN (NEU) ---

    /**
     * (NEU) Führt den FROM-Teil des Plans aus.
     */
    function executeFrom(tableName) {
        if (!db[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        }
        // WICHTIG: Eine Kopie zurückgeben, um die Originaldatenbank nicht zu ändern
        return [...db[tableName]];
    }


    function executeWhere(data, whereClause) {
        
        // 1. Übersetze die SQL-Bedingung in eine JS-Bedingung
        const jsClause = convertSqlWhereToJs(whereClause);

        // 2. Filtere die Daten
        return data.filter(row => {
            try {
                // 3. Führe die JS-Bedingung für JEDE Zeile in der Sandbox aus
                // evaluateExpression ist unsere `new Function(...)`-Sandbox
                return evaluateExpression(row, jsClause);
            } catch (e) {
                throw new Error(`Fehler beim Auswerten der WHERE-Klausel '${jsClause}': ${e.message}`);
            }
        });
    }
    /**
     * (NEU) Führt den SELECT-Teil des Plans aus.
     * (Aus der alten handleSelect-Funktion extrahiert)
     */
    function executeSelect(data, selectPlan) {
        // selectPlan ist ein Array, z.B. [{ expr: 'name', alias: 'name' }, { expr: 'age + 10', alias: 'old' }]
        
        if (selectPlan.length === 1 && selectPlan[0].expr === '*') {
            return data;
        }

        return data.map(row => {
            const newRow = {};
            for (const col of selectPlan) {
                try {
                    const value = evaluateExpression(row, col.expr);
                    newRow[col.alias] = value;
                } catch (e) {
                    throw new Error(`Fehler beim Verarbeiten von '${col.expr}': ${e.message}`);
                }
            }
            return newRow;
        });
    }
    /**
     * (NEUE FUNKTION) Übersetzt eine SQL WHERE-Klausel in einen JS-Boolean-Ausdruck.
     */
 /**
     * (AKTUALISIERT) Übersetzt eine SQL WHERE-Klausel in einen JS-Boolean-Ausdruck.
     * Verwendet jetzt Wortgrenzen (\b), um AND/OR/NOT korrekt zu erkennen.
     */
    /**
     * (AKTUALISIERT) Übersetzt eine SQL WHERE-Klausel in einen JS-Boolean-Ausdruck.
     * Erkennt jetzt IS NULL und IS NOT NULL.
     */
    function convertSqlWhereToJs(clause) {
        let jsClause = clause;

        // --- HIER IST DIE NEUE LOGIK ---
        // WICHTIG: Diese Regeln müssen VOR den anderen laufen.
        
        // Wandle 'col IS NOT NULL' in 'col != null' um
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_]+)\s+IS\s+NOT\s+NULL\b/gi, (match, col) => {
            return `${col} != null`; // JS-Prüfung auf nicht-null/undefined
        });

        // Wandle 'col IS NULL' in 'col == null' um
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_]+)\s+IS\s+NULL\b/gi, (match, col) => {
            return `${col} == null`; // JS-Prüfung auf null/undefined
        });
        // --- ENDE DER NEUEN LOGIK ---

        // Alte Regeln (unverändert)
        jsClause = jsClause
            .replace(/\bAND\b/gi, ' && ')  // 'AND' -> '&&'
            .replace(/\bOR\b/gi, ' || ')   // 'OR'  -> '||'
            .replace(/\bNOT\b/gi, ' ! ');  // 'NOT' -> '!'

        // Übersetze Vergleiche mit Zahlen (unverändert)
        jsClause = jsClause.replace(/([a-zA-Z0-9_]+)\s*(=|>|<)\s*([0-9\.]+)/g, (match, col, op, num) => {
            const jsOp = (op === '=') ? '==' : op;
            return `${col} ${jsOp} ${num}`;
        });

        // Übersetze Vergleiche mit Strings (unverändert)
        jsClause = jsClause.replace(/([a-zA-Z0-9_]+)\s*(=|>|<)\s*(["'](.*?)["'])/g, (match, col, op, strLit, strVal) => {
            if (op === '=') {
                return `(String(${col}).toLowerCase() == ${strLit.toLowerCase()})`;
            } else {
                return `(String(${col}).toLowerCase() ${op} ${strLit.toLowerCase()})`;
            }
        });

        return jsClause;
    }

    /**
     * (NEU) Führt den ORDER BY-Teil des Plans aus.
     * (Logik korrigiert, um auf *finalen* Daten zu sortieren)
     */
    function executeOrderBy(data, orderByPlan) {
        const { column, direction } = orderByPlan;
        
        return data.sort((a, b) => {
            // WICHTIG: Prüft, ob die Spalte in den *neuen, berechneten* Daten existiert.
            if (!a.hasOwnProperty(column) || !b.hasOwnProperty(column)) {
                throw new Error(`Fehler: Spalte '${column}' in ORDER BY nicht gefunden. (Aliase müssen evtl. in Anführungszeichen gesetzt werden)`);
            }
            const valA = a[column];
            const valB = b[column];

            let comparison = 0;
            if (typeof valA === 'number' && typeof valB === 'number') {
                comparison = valA - valB;
            } else {
                comparison = String(valA).localeCompare(String(valB));
            }

            return (direction === 'DESC') ? (comparison * -1) : comparison;
        });
    }



    /**
     * (Unverändert) Wertet komplexe Ausdrücke aus (z.B. "age + 10")
     */
    function evaluateExpression(row, expression) {
        expression = expression.trim();
        const colNames = Object.keys(row);
        const values = colNames.map(col => row[col]);

        try {
            const evaluator = new Function(...colNames, `'use strict'; return ${expression};`);
            return evaluator(...values);
        } catch (e) {
            throw new Error(`Ungültiger Ausdruck oder Operation: '${expression}'. JS-Fehler: ${e.message}`);
        }
    }

    /**
     * (Unverändert) Zeigt die Ergebnisse an.
     */
    function displayResults(result) {
        if (result.message) {
            messageDiv.textContent = result.message;
            outputDiv.innerHTML = '';
            return;
        }

        if (Array.isArray(result)) {
            if (result.length === 0) {
                messageDiv.textContent = 'Abfrage erfolgreich ausgeführt. 0 Zeilen zurückgegeben.';
                return;
            }

            messageDiv.textContent = `Abfrage erfolgreich ausgeführt. ${result.length} Zeilen zurückgegeben.`;
            const table = document.createElement('table');
            const thead = table.createTHead();
            const headerRow = thead.insertRow();
            const headers = Object.keys(result[0]);
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

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
    }

/**
     * (NEU) Führt den DISTINCT-Teil des Plans aus.
     * Filtert doppelte Zeilen (als Objekte) heraus.
     */
    function executeDistinct(data) {
        // Wir nutzen ein Set, um gesehene Zeilen zu speichern
        const seen = new Set();
        
        return data.filter(row => {
            // Wir wandeln das Zeilen-Objekt in einen String um,
            // da Objekte nicht direkt in einem Set verglichen werden können.
            const rowString = JSON.stringify(row);
            
            if (!seen.has(rowString)) {
                seen.add(rowString);
                return true; // Diese Zeile ist neu, wir behalten sie
            }
            return false; // Diese Zeile ist ein Duplikat, wir filtern sie raus
        });
    }

    function handleUpdate(query) {
        // 1. PARSING: Abfrage in einen "Plan" umwandeln
        const plan = buildUpdatePlan(query);

        // 2. EXECUTION: Die Pipeline ausführen
        const updateCount = executeUpdate(plan);
        
        // 3. Ergebnis zurückgeben
        return { message: `${updateCount} Zeile(n) erfolgreich aktualisiert.` };
    }

    function buildUpdatePlan(query) {
        const plan = {};

        // 1. UPDATE (Tabelle finden)
        const updateMatch = query.match(/UPDATE\s+([a-zA-Z0-9_]+)\s+SET/i);
        if (!updateMatch) throw new Error("Syntax-Fehler: 'UPDATE table SET' nicht gefunden.");
        plan.table = updateMatch[1];

        // 2. SET (Werte finden)
        const setMatch = query.match(/SET\s+(.+?)(?:\s+WHERE|;|$)/i);
        if (!setMatch) throw new Error("Syntax-Fehler: 'SET'-Klausel nicht gefunden.");
        
        plan.setClauses = setMatch[1].split(',').map(clause => {
            const parts = clause.split('=');
            if (parts.length !== 2) throw new Error(`Syntax-Fehler in SET-Klausel: '${clause}'`);
            
            const column = parts[0].trim();
            const valueStr = parts[1].trim();
            
            // Wert parsen (String oder Zahl)
            let value;
            const cleanedValStr = valueStr.replace(/['"]/g, ''); // Anführungszeichen entfernen

            if (!isNaN(parseFloat(cleanedValStr)) && isFinite(cleanedValStr)) {
                value = parseFloat(cleanedValStr); // Ist eine Zahl
            } else {
                value = cleanedValStr; // Ist ein String
            }
            
            return { column, value };
        });

        // 3. WHERE (optional)
        const whereMatch = query.match(/WHERE\s+(.+?);?$/i);
        if (whereMatch) {
            plan.where = whereMatch[1].trim();
        }

        return plan;
    }

    /**
     * (NEU) Führt den UPDATE-Plan aus.
     */
    function executeUpdate(plan) {
        const tableName = plan.table;
        if (!db[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        }

        let updateCount = 0;
        
        // Iteriere über das Original-Array in der 'db'-Variable
        db[tableName].forEach(row => {
            
            // 1. Prüfe, ob die Zeile die WHERE-Bedingung erfüllt
            let matchesWhere = true; // Standard ist true, falls keine WHERE-Klausel vorhanden ist
            
            if (plan.where) {
                // ** WIR VERWENDEN UNSERE ALTE WHERE-LOGIK WIEDER! **
                // executeWhere erwartet ein Array, also [row].
                // Wenn das Ergebnis-Array > 0 ist, hat die Zeile gematcht.
                matchesWhere = executeWhere([row], plan.where).length > 0;
            }
            
            // 2. Wenn sie matcht, wende die Updates an
            if (matchesWhere) {
                updateCount++;
                
                // Wende alle SET-Klauseln auf diese Zeile an
                plan.setClauses.forEach(clause => {
                    const { column, value } = clause;
                    if (!row.hasOwnProperty(column)) {
                        throw new Error(`Fehler: Spalte '${column}' in Tabelle '${tableName}' nicht gefunden.`);
                    }
                    // Aktualisiere den Wert direkt in der 'db'-Variable
                    row[column] = value;
                });
            }
        });

        return updateCount;
    }

    function handleDelete(query) {
        // 1. PARSING: Abfrage in einen "Plan" umwandeln
        const plan = buildDeletePlan(query);

        // 2. EXECUTION: Die Pipeline ausführen
        const deleteCount = executeDelete(plan);
        
        // 3. Ergebnis zurückgeben
        return { message: `${deleteCount} Zeile(n) erfolgreich gelöscht.` };
    }

    function executeDelete(plan) {
        const tableName = plan.table;
        if (!db[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        }

        const originalLength = db[tableName].length;
        let rowsToKeep;

        if (plan.where) {
            // FALL 1: Es gibt eine WHERE-Klausel.
            // Behalte nur die Zeilen, die NICHT der Bedingung entsprechen.
            rowsToKeep = db[tableName].filter(row => {
                // Wir nutzen executeWhere, um zu sehen, ob die Zeile matcht
                const matchesWhere = executeWhere([row], plan.where).length > 0;
                return !matchesWhere; // Behalte Zeile, wenn sie NICHT matcht
            });
        } else {
            // FALL 2: Es gibt KEINE WHERE-Klausel. Lösche alles.
            rowsToKeep = [];
        }

        // Aktualisiere die Originaldatenbank
        db[tableName] = rowsToKeep;

        // Berechne, wie viele Zeilen gelöscht wurden
        const deleteCount = originalLength - rowsToKeep.length;
        return deleteCount;
    }
    function displayError(message) {
        outputDiv.innerHTML = `<div class="error">${message}</div>`;
    }
});