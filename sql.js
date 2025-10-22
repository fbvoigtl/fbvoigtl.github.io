// Wait for the DOM to be fully loaded before setting up listeners
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOCK DATABASE ---
    // (Unverändert)
    const db = {
        users: [
            { id: 1, name: 'Alice', age: 25, city: 'London', status: 'active' },
            { id: 2, name: 'Bob', age: 32, city: 'Paris', status: 'active' },
            { id: 3, name: 'Charlie', age: 28, city: null, status: 'inactive' },
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
    // (Unverändert)
    const queryInput = document.getElementById('sql-query');
    const runButton = document.getElementById('run-button');
    const outputDiv = document.getElementById('results-output');
    const messageDiv = document.getElementById('results-message');

    // --- 3. EVENT LISTENER ---
    // (Unverändert, mit Ctrl+Enter)
    runButton.addEventListener('click', handleQuery);
    
    queryInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            handleQuery();
        }
    });

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
    // (Unverändert)
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
        if (upperQuery.startsWith('DELETE FROM ')) {
            return handleDelete(normalizedQuery);
        }

        throw new Error(`Syntax-Fehler: Nicht unterstützter Befehlstyp.`);
    }

    // --- 5. BEFEHLS-HANDLER ---
    // (handleSelect ist NEU, Rest ist unverändert)

    /**
     * (STARK ÜBERARBEITET) Verarbeitet SELECT-Abfragen über eine Pipeline.
     * Unterstützt jetzt JOINs.
     */
    function handleSelect(query) {
        // 1. PARSING: Abfrage in einen "Plan" umwandeln
        const plan = buildQueryPlan(query);

        // 2. EXECUTION: Die Pipeline Schritt für Schritt ausführen
        
        // a. FROM / JOIN
        // executeFrom gibt jetzt Daten mit präfixierten Spalten zurück
        // z.B. { "users.id": 1, "users.name": "Alice", "orders.order_id": 501, ... }
        let data = executeFrom(plan);
        const allColumns = (data.length > 0) ? Object.keys(data[0]) : [];

        // b. WHERE
        if (plan.where) {
            data = executeWhere(data, plan.where, allColumns);
        }

        // c. SELECT (Berechnungen & Aliase)
        data = executeSelect(data, plan.select, allColumns);

        // d. DISTINCT
        if (plan.distinct) {
            data = executeDistinct(data);
        }

        // e. ORDER BY
        if (plan.orderBy) {
            data = executeOrderBy(data, plan.orderBy, allColumns);
        }

        // f. LIMIT (TOP)
        if (plan.limit !== null) {
            data = executeLimit(data, plan.limit);
        }

        return data;
    }

    // (handleInsert, handleUpdate, handleDelete sind unverändert)
    // ... (Füge hier deine handleInsert, handleUpdate, handleDelete Funktionen ein) ...
    // ... (Der Code ist lang, daher füge ich sie hier nicht erneut ein) ...

    /**
     * Verarbeitet INSERT-Abfragen
     */
    function handleInsert(query) {
        const insertRegex = /INSERT INTO\s+([a-zA-Z0-9_]+)(?:\s*\((.+?)\))?\s+VALUES\s*\((.+?)\);/i;
        const match = query.match(insertRegex);
        if (!match) throw new Error('Ungültige INSERT-Syntax. Erwartet: INSERT INTO tabelle (spalten) VALUES (werte) ODER INSERT INTO tabelle VALUES (werte);');
        const [_, tableName, colStr, valStr] = match;
        if (!db[tableName]) throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        const values = valStr.split(',').map(v => v.trim());
        let columns;
        if (colStr) {
            columns = colStr.split(',').map(c => c.trim());
            if (db[tableName].length > 0) {
                const firstRow = db[tableName][0];
                for (const col of columns) {
                    if (!firstRow.hasOwnProperty(col)) throw new Error(`Fehler: Spalte '${col}' existiert nicht in Tabelle '${tableName}'.`);
                }
            }
        } else {
            if (db[tableName].length === 0) throw new Error(`Fehler: INSERT ohne Spaltenliste in eine leere Tabelle nicht möglich (Struktur unbekannt).`);
            columns = Object.keys(db[tableName][0]);
        }
        if (columns.length !== values.length) {
            if (colStr) throw new Error(`Fehler: Die Anzahl der Spalten (${columns.length}) stimmt nicht mit der Anzahl der Werte (${values.length}) überein.`);
            else throw new Error(`Fehler: Die Anzahl der Werte (${values.length}) stimmt nicht mit der Tabellenstruktur (${columns.length} Spalten) überein.`);
        }
        const newRow = {};
        for (let i = 0; i < columns.length; i++) {
            const col = columns[i];
            const valStr = values[i];
            let parsedValue;
            const cleanedValStr = valStr.replace(/['"]/g, '');
            if (!isNaN(parseFloat(cleanedValStr)) && isFinite(cleanedValStr)) parsedValue = parseFloat(cleanedValStr);
            else parsedValue = cleanedValStr;
            newRow[col] = parsedValue;
        }
        db[tableName].push(newRow);
        return { message: `1 Zeile erfolgreich in '${tableName}' eingefügt.` };
    }

    /**
     * Verarbeitet UPDATE-Abfragen.
     */
    function handleUpdate(query) {
        const plan = buildUpdatePlan(query);
        const allColumns = (db[plan.table].length > 0) ? Object.keys(db[plan.table][0]) : [];
        const updateCount = executeUpdate(plan, allColumns);
        return { message: `${updateCount} Zeile(n) erfolgreich aktualisiert.` };
    }

    /**
     * Verarbeitet DELETE-Abfragen.
     */
    function handleDelete(query) {
        const plan = buildDeletePlan(query);
        const allColumns = (db[plan.table].length > 0) ? Object.keys(db[plan.table][0]) : [];
        const deleteCount = executeDelete(plan, allColumns);
        return { message: `${deleteCount} Zeile(n) erfolgreich gelöscht.` };
    }

    // --- 6. PARSING-HILFSFUNKTIONEN ---

    /**
     * (STARK ÜBERARBEITET) Zerlegt die SELECT-Abfrage in ihre Teile (den "Plan").
     * Erkennt jetzt JOIN-Klauseln.
     */
    function buildQueryPlan(query) {
        const plan = {
            limit: null,
            distinct: false,
            joins: [],
            where: null,
            orderBy: null
        };

        // 1. FROM und JOINs
        // Regex für: FROM table1 [INNER] JOIN table2 ON ... [INNER] JOIN table3 ON ...
        const fromMatch = query.match(/FROM\s+([a-zA-Z0-9_]+)((?:\s+(?:INNER\s+)?JOIN\s+[a-zA-Z0-9_]+\s+ON\s+.+?)+)/i);
        if (fromMatch) {
            // --- Fall 1: FROM mit JOINs ---
            plan.from = fromMatch[1]; // Basistabelle (z.B. "users")
            
            // Regex, um jeden einzelnen JOIN-Teil zu finden
            const joinRegex = /(?:INNER\s+)?JOIN\s+([a-zA-Z0-9_]+)\s+ON\s+([a-zA-Z0-9_\.]+\s*=\s*[a-zA-Z0-9_\.]+)/gi;
            let joinMatch;
            while ((joinMatch = joinRegex.exec(fromMatch[2])) !== null) {
                plan.joins.push({
                    table: joinMatch[1], // z.B. "orders"
                    on: joinMatch[2]     // z.B. "users.id = orders.user_id"
                });
            }
        } else {
            // --- Fall 2: Nur FROM (keine JOINs) ---
            const simpleFromMatch = query.match(/FROM\s+([a-zA-Z0-9_]+)/i);
            if (!simpleFromMatch) throw new Error("Syntax-Fehler: 'FROM'-Klausel nicht gefunden.");
            plan.from = simpleFromMatch[1];
        }

        // 2. SELECT (unverändert)
        const selectMatch = query.match(/SELECT\s+(.+?)\s+FROM/i);
        if (!selectMatch) throw new Error("Syntax-Fehler: 'SELECT'-Klausel nicht gefunden.");
        let selectClause = selectMatch[1].trim();

        if (selectClause.toUpperCase().startsWith('DISTINCT ')) {
            plan.distinct = true;
            selectClause = selectClause.substring(9).trim();
        }

        const topMatch = selectClause.match(/^TOP\s+([0-9]+)\s+/i);
        if (topMatch) {
            plan.limit = parseInt(topMatch[1]);
            selectClause = selectClause.substring(topMatch[0].length).trim();
        }
        
        plan.select = parseSelectColumns(selectClause); // unverändert

        // 3. WHERE (unverändert)
        const whereMatch = query.match(/WHERE\s+(.+?)(?:\s+ORDER BY|;|$)/i);
        if (whereMatch) plan.where = whereMatch[1].trim();

        // 4. ORDER BY (unverändert)
        const orderByMatch = query.match(/ORDER BY\s+(.+?)(?:;|$)/i);
        if (orderByMatch) plan.orderBy = parseOrderBy(orderByMatch[1]);

        return plan;
    }

    // (parseSelectColumns, parseOrderBy sind unverändert)
    // ... (Füge hier deine parseSelectColumns, parseOrderBy, buildUpdatePlan, buildDeletePlan ein) ...
    // ... (Der Code ist lang, daher füge ich sie hier nicht erneut ein) ...

    function parseSelectColumns(selectClause) {
        const columnStrings = selectClause.split(',').map(c => c.trim());
        if (columnStrings.length === 1 && columnStrings[0] === '*') {
            return [{ func: null, expr: '*', alias: '*' }];
        }
        return columnStrings.map(colStr => {
            const asMatch = colStr.match(/\s+AS\s+(["'](.+?)["']|([a-zA-Z0-9_]+))$/i);
            let expr = colStr, alias = colStr;
            if (asMatch) {
                expr = colStr.substring(0, asMatch.index).trim();
                alias = asMatch[2] || asMatch[3];
            }
            const aggMatch = expr.match(/\b(MIN|MAX|COUNT|SUM|AVG)\b\s*\((.+?)\)/i);
            if (aggMatch) {
                return { func: aggMatch[1].toUpperCase(), expr: aggMatch[2].trim(), alias: alias };
            } else {
                return { func: null, expr: expr, alias: alias };
            }
        });
    }

    function parseOrderBy(orderByClause) {
        const parts = orderByClause.trim().split(/\s+/);
        const column = parts[0].replace(/["']/g, '');
        let direction = 'ASC';
        if (parts.length > 1 && parts[1].toUpperCase() === 'DESC') direction = 'DESC';
        return { column: column, direction: direction };
    }

    function buildUpdatePlan(query) {
        const plan = {};
        const updateMatch = query.match(/UPDATE\s+([a-zA-Z0-9_]+)\s+SET/i);
        if (!updateMatch) throw new Error("Syntax-Fehler: 'UPDATE table SET' nicht gefunden.");
        plan.table = updateMatch[1];
        const setMatch = query.match(/SET\s+(.+?)(?:\s+WHERE|;|$)/i);
        if (!setMatch) throw new Error("Syntax-Fehler: 'SET'-Klausel nicht gefunden.");
        plan.setClauses = setMatch[1].split(',').map(clause => {
            const parts = clause.split('=');
            if (parts.length !== 2) throw new Error(`Syntax-Fehler in SET-Klausel: '${clause}'`);
            const column = parts[0].trim();
            const valueStr = parts[1].trim();
            let value;
            const cleanedValStr = valueStr.replace(/['"]/g, '');
            if (!isNaN(parseFloat(cleanedValStr)) && isFinite(cleanedValStr)) value = parseFloat(cleanedValStr);
            else value = cleanedValStr;
            return { column, value };
        });
        const whereMatch = query.match(/WHERE\s+(.+?);?$/i);
        if (whereMatch) plan.where = whereMatch[1].trim();
        return plan;
    }
    
    function buildDeletePlan(query) {
        const plan = {};
        const deleteMatch = query.match(/DELETE FROM\s+([a-zA-Z0-9_]+)/i);
        if (!deleteMatch) throw new Error("Syntax-Fehler: 'DELETE FROM table' nicht gefunden.");
        plan.table = deleteMatch[1];
        const whereMatch = query.match(/WHERE\s+(.+?);?$/i);
        if (whereMatch) plan.where = whereMatch[1].trim();
        return plan;
    }

    // --- 7. EXECUTION-PIPELINE-FUNKTIONEN ---

    /**
     * (STARK ÜBERARBEITET) Führt den FROM-Teil aus (inkl. JOINs).
     * Gibt Daten mit präfixierten Spaltennamen zurück.
     */
    function executeFrom(plan) {
        const baseTable = plan.from;
        if (!db[baseTable]) {
            throw new Error(`Fehler: Tabelle '${baseTable}' nicht gefunden.`);
        }

        // 1. Lade Basistabelle und präfixiere Spalten
        let data = db[baseTable].map(row => prefixColumns(baseTable, row));

        // 2. Führe alle JOINs nacheinander aus
        for (const join of plan.joins) {
            const joinTable = join.table;
            if (!db[joinTable]) {
                throw new Error(`Fehler: JOIN-Tabelle '${joinTable}' nicht gefunden.`);
            }

            // 2a. Lade Join-Tabelle und präfixiere Spalten
            const joinData = db[joinTable].map(row => prefixColumns(joinTable, row));
            
            // 2b. Parse die simple ON-Klausel (z.B. users.id = orders.user_id)
            const onMatch = join.on.match(/([a-zA-Z0-9_\.]+)\s*=\s*([a-zA-Z0-9_\.]+)/);
            if (!onMatch) {
                throw new Error(`Syntax-Fehler in ON-Klausel: '${join.on}'. Nur 'table1.col1 = table2.col2' wird unterstützt.`);
            }
            const [_, col1, col2] = onMatch.map(s => s.trim());

            // 2c. Führe Cartesian Product (Kreuzprodukt) + Filter (INNER JOIN) aus
            const joinedData = [];
            for (const rowA of data) {
                for (const rowB of joinData) {
                    const mergedRow = { ...rowA, ...rowB };
                    // Prüfe die ON-Bedingung
                    if (mergedRow[col1] == mergedRow[col2]) {
                        joinedData.push(mergedRow);
                    }
                }
            }
            data = joinedData; // Das Ergebnis des Joins ist die Basis für den nächsten
        }
        
        return data;
    }

    /**
     * (STARK ÜBERARBEITET) Führt den WHERE-Teil aus.
     * Benötigt jetzt allColumns, um Spaltennamen aufzulösen.
     */
    function executeWhere(data, whereClause, allColumns) {
        // 1. Übersetze die SQL-Bedingung in eine JS-Bedingung
        // z.B. "age > 20" -> "row['users.age'] > 20"
        const jsClause = convertSqlWhereToJs(whereClause, allColumns);

        // 2. Filtere die Daten
        return data.filter(row => {
            try {
                // 3. Führe die JS-Bedingung für JEDE Zeile in der Sandbox aus
                return evaluateJsExpression(row, jsClause);
            } catch (e) {
                throw new Error(`Fehler beim Auswerten der WHERE-Klausel '${jsClause}': ${e.message}`);
            }
        });
    }

    /**
     * (STARK ÜBERARBEITET) Führt den SELECT-Teil aus.
     */
    function executeSelect(data, selectPlan, allColumns) {
        // 1. Prüfen, ob *irgendeine* Spalte eine Aggregatfunktion ist
        const isAggregateQuery = selectPlan.some(col => col.func);

        if (isAggregateQuery) {
            // --- FALL 1: AGGREGATION ---
            const isPureAggregate = selectPlan.every(col => col.func);
            if (!isPureAggregate) {
                const nonAggCol = selectPlan.find(col => !col.func).expr;
                throw new Error(`Fehler: Die Spalte '${nonAggCol}' ist nicht in einer Aggregatfunktion.`);
            }

            const resultRow = {};
            for (const col of selectPlan) {
                resultRow[col.alias] = calculateAggregate(data, col.func, col.expr, allColumns);
            }
            return [resultRow];

        } else {
            // --- FALL 2: PROJEKTION ---
            if (selectPlan.length === 1 && selectPlan[0].expr === '*') {
                return data;
            }

            return data.map(row => {
                const newRow = {};
                for (const col of selectPlan) {
                    try {
                        const jsExpr = resolveColumnNames(col.expr, allColumns);
                        const value = evaluateJsExpression(row, jsExpr);
                        newRow[col.alias] = value;
                    } catch (e) {
                        throw new Error(`Fehler beim Verarbeiten von '${col.expr}': ${e.message}`);
                    }
                }
                return newRow;
            });
        }
    }

    /**
     * (STARK ÜBERARBEITET) Führt den ORDER BY-Teil aus.
     */
    function executeOrderBy(data, orderByPlan, allColumns) {
        const { column, direction } = orderByPlan;
        
        // 1. Finde den voll qualifizierten Spaltennamen (z.B. 'age' -> 'users.age')
        // (Oder prüfe, ob es ein Alias aus dem SELECT ist)
        let sortKey;
        if (data.length > 0 && data[0].hasOwnProperty(column)) {
             // Es ist ein Alias (z.B. ORDER BY "new Age")
            sortKey = column;
        } else {
            // Es ist ein Spaltenname
            sortKey = resolveColumnName(column, allColumns);
        }

        return data.sort((a, b) => {
            if (!a.hasOwnProperty(sortKey) || !b.hasOwnProperty(sortKey)) {
                throw new Error(`Fehler: Spalte '${column}' in ORDER BY nicht gefunden.`);
            }
            const valA = a[sortKey];
            const valB = b[sortKey];

            let comparison = 0;
            if (typeof valA === 'number' && typeof valB === 'number') {
                comparison = valA - valB;
            } else {
                comparison = String(valA).localeCompare(String(valB));
            }

            return (direction === 'DESC') ? (comparison * -1) : comparison;
        });
    }

    // (executeUpdate, executeDelete sind ÜBERARBEITET, um allColumns zu nutzen)
    
    function executeUpdate(plan, allColumns) {
        const tableName = plan.table;
        if (!db[tableName]) throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        let updateCount = 0;
        
        // Wir iterieren über das Original-DB-Array
        db[tableName].forEach(row => {
            let matchesWhere = true;
            if (plan.where) {
                // Führe WHERE auf der (ungejointen) Zeile aus
                matchesWhere = executeWhere([row], plan.where, allColumns).length > 0;
            }
            
            if (matchesWhere) {
                updateCount++;
                plan.setClauses.forEach(clause => {
                    const { column, value } = clause;
                    const resolvedCol = resolveColumnName(column, allColumns);
                    // Entferne Präfix für das Update auf der Originaltabelle
                    const rawCol = resolvedCol.split('.')[1] || resolvedCol; 
                    if (!row.hasOwnProperty(rawCol)) {
                        throw new Error(`Fehler: Spalte '${column}' in Tabelle '${tableName}' nicht gefunden.`);
                    }
                    row[rawCol] = value;
                });
            }
        });
        return updateCount;
    }

    function executeDelete(plan, allColumns) {
        const tableName = plan.table;
        if (!db[tableName]) throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        const originalLength = db[tableName].length;
        let rowsToKeep;

        if (plan.where) {
            rowsToKeep = db[tableName].filter(row => {
                const matchesWhere = executeWhere([row], plan.where, allColumns).length > 0;
                return !matchesWhere; // Behalte, wenn NICHT matcht
            });
        } else {
            rowsToKeep = []; // Lösche alles
        }
        db[tableName] = rowsToKeep;
        const deleteCount = originalLength - rowsToKeep.length;
        return deleteCount;
    }
    
    // (executeDistinct, executeLimit sind unverändert)
    function executeDistinct(data) {
        const seen = new Set();
        return data.filter(row => {
            const rowString = JSON.stringify(row);
            if (!seen.has(rowString)) {
                seen.add(rowString);
                return true;
            }
            return false;
        });
    }

    function executeLimit(data, limit) {
        return data.slice(0, limit);
    }

    // --- 8. ALLGEMEINE HELPER-FUNKTIONEN ---
    
    /**
     * (NEU) Wandelt eine Zeile um: { id: 1 } -> { "users.id": 1 }
     */
    function prefixColumns(tableName, row) {
        const newRow = {};
        for (const key in row) {
            newRow[`${tableName}.${key}`] = row[key];
        }
        return newRow;
    }

    /**
     * (NEU) Löst einen Spaltennamen auf (z.B. "age" -> "users.age")
     * Wirft Fehler bei Mehrdeutigkeit.
     */
    function resolveColumnName(colName, allColumns) {
        // 1. Ist bereits qualifiziert (z.B. "users.age")
        if (colName.includes('.')) {
            if (allColumns.includes(colName)) {
                return colName;
            }
            throw new Error(`Fehler: Spalte '${colName}' nicht gefunden.`);
        }
        
        // 2. Ist nicht qualifiziert (z.B. "age")
        const matches = allColumns.filter(col => col.endsWith(`.${colName}`));
        
        if (matches.length === 1) {
            return matches[0]; // z.B. "users.age"
        }
        if (matches.length > 1) {
            throw new Error(`Fehler: Spaltenname '${colName}' ist mehrdeutig (z.B. in ${matches.join(', ')}).`);
        }
        
        throw new Error(`Fehler: Spalte '${colName}' nicht gefunden.`);
    }

    /**
     * (NEU) Wandelt einen SQL-Ausdruck in JS um (z.B. "age + 10" -> "row['users.age'] + 10")
     */
    function resolveColumnNames(expression, allColumns) {
        // Finde alle Spaltennamen (table.col oder nur col)
        return expression.replace(/\b([a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)?)\b/g, (match) => {
            // Wenn der Match eine Zahl ist, ignoriere ihn
            if (!isNaN(parseFloat(match))) {
                return match;
            }
            // Ansonsten, löse ihn auf und setze ihn in row[...]
            const resolvedCol = resolveColumnName(match, allColumns);
            return `row["${resolvedCol}"]`;
        });
    }

    /**
     * (STARK ÜBERARBEITET) Übersetzt SQL WHERE in JS.
     */
    function convertSqlWhereToJs(clause, allColumns) {
        let jsClause = clause;

        // Hilfsfunktion, um einen Spaltennamen aufzulösen und für JS zu quoten
        const res = (col) => resolveColumnNames(col, allColumns);

        // REGEL 1: IS (NOT) NULL
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+IS\s+NOT\s+NULL\b/gi, (m, col) => `${res(col)} != null`);
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+IS\s+NULL\b/gi, (m, col) => `${res(col)} == null`);

        // REGEL 2: LIKE / NOT LIKE
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+(NOT\s+)?LIKE\s+(["'](.*?)["'])/gi, (m, col, notOp, strLit, pattern) => {
            const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regexPattern = escapedPattern.replace(/%/g, '.*').replace(/_/g, '.');
            const jsTest = `(new RegExp('^${regexPattern}$', 'i')).test(String(${res(col)}))`;
            return (notOp) ? `!${jsTest}` : jsTest;
        });
        
        // REGEL 3: IN / NOT IN
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+(NOT\s+)?IN\s*\((.+?)\)/gi, (m, col, notOp, valueList) => {
            let jsList, jsCheck;
            if (valueList.includes("'") || valueList.includes('"')) {
                jsList = `[${valueList.toLowerCase()}]`;
                jsCheck = `String(${res(col)}).toLowerCase()`;
            } else {
                jsList = `[${valueList}]`;
                jsCheck = res(col);
            }
            const jsTest = `${jsList}.includes(${jsCheck})`;
            return (notOp) ? `!${jsTest}` : jsTest;
        });

        // REGEL 4: BETWEEN / NOT BETWEEN
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+(NOT\s+)?BETWEEN\s+([0-9\.]+|["'].*?["'])\s+AND\s+([0-9\.]+|["'].*?["'])/gi, (m, col, notOp, val1, val2) => {
            let jsCheck = res(col), jsVal1 = val1, jsVal2 = val2;
            if (val1.startsWith("'") || val1.startsWith('"')) {
                jsCheck = `String(${res(col)}).toLowerCase()`;
                jsVal1 = val1.toLowerCase();
                jsVal2 = val2.toLowerCase();
            }
            const jsTest = `(${jsCheck} >= ${jsVal1} && ${jsCheck} <= ${jsVal2})`;
            return (notOp) ? `!${jsTest}` : jsTest;
        });

        // REGEL 5: AND / OR / NOT
        jsClause = jsClause.replace(/\bAND\b/gi, ' && ').replace(/\bOR\b/gi, ' || ').replace(/\bNOT\b/gi, ' ! ');

        // REGEL 6: Vergleiche (z.B. col = col, col = num, col = str)
        // Muss NACH speziellen Regeln wie LIKE, IN, BETWEEN laufen
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s*(=|>|<)\s*([a-zA-Z0-9_\.]+|["'].*?["']|[0-9\.]+)/gi, (match, col1, op, val) => {
            const jsCol1 = res(col1);
            let jsVal = val;
            
            if (val.startsWith("'") || val.startsWith('"')) {
                // Vergleich mit String -> case-insensitive
                return `(String(${jsCol1}).toLowerCase() ${op === '=' ? '==' : op} ${val.toLowerCase()})`;
            } else if (!isNaN(parseFloat(val))) {
                // Vergleich mit Zahl
                return `(${jsCol1} ${op === '=' ? '==' : op} ${val})`;
            } else {
                // Vergleich mit anderer Spalte (z.B. users.id = orders.user_id)
                const jsCol2 = res(val);
                return `(${jsCol1} ${op === '=' ? '==' : op} ${jsCol2})`;
            }
        });

        return jsClause;
    }

    /**
     * (STARK ÜBERARBEITET) Führt einen JS-Ausdruck sicher aus.
     * Nutzt jetzt 'row' als einziges Argument.
     */
    function evaluateJsExpression(row, jsExpression) {
        try {
            // Die neue Sandbox: new Function('row', 'return row["users.age"] + 10')
            const evaluator = new Function('row', `'use strict'; return ${jsExpression};`);
            return evaluator(row);
        } catch (e) {
            throw new Error(`Fehler beim Auswerten von JS: '${jsExpression}'. Fehler: ${e.message}`);
        }
    }

    /**
     * (STARK ÜBERARBEITET) Berechnet Aggregate
     */
    function calculateAggregate(data, funcName, expr, allColumns) {
        if (data.length === 0) return null;
        
        let targetCol = null;
        if (expr !== '*') {
            targetCol = resolveColumnName(expr, allColumns);
        }

        switch (funcName) {
            case 'COUNT':
                if (expr === '*') return data.length;
                return data.filter(row => row[targetCol] != null).length;
            case 'SUM':
                return data.reduce((acc, row) => {
                    const val = row[targetCol];
                    return acc + (typeof val === 'number' ? val : 0);
                }, 0);
            case 'AVG': {
                const numericValues = data.map(row => row[targetCol]).filter(val => typeof val === 'number');
                if (numericValues.length === 0) return null;
                const sum = numericValues.reduce((a, b) => a + b, 0);
                return sum / numericValues.length;
            }
            case 'MIN': {
                const numericValues = data.map(row => row[targetCol]).filter(val => typeof val === 'number');
                if (numericValues.length === 0) return null;
                return Math.min(...numericValues);
            }
            case 'MAX': {
                const numericValues = data.map(row => row[targetCol]).filter(val => typeof val === 'number');
                if (numericValues.length === 0) return null;
                return Math.max(...numericValues);
            }
            default:
                throw new Error(`Unbekannte Aggregatfunktion: ${funcName}`);
        }
    }
    
    // (displayResults, displayError sind unverändert)
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
    
    function displayError(message) {
        outputDiv.innerHTML = `<div class="error">${message}</div>`;
    }
});