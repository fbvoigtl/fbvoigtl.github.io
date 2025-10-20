// Wait for the DOM to be fully loaded before setting up listeners
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOCK DATABASE ---
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
        
        // if (upperQuery.startsWith('UPDATE ')) {
        //     return handleUpdate(normalizedQuery);
        // }
        // if (upperQuery.startsWith('DELETE FROM ')) {
        //     return handleDelete(normalizedQuery);
        // }

        throw new Error(`Syntax-Fehler: Nicht unterstützter Befehlstyp. Beginne mit SELECT oder INSERT INTO.`);
    }

    // --- 5. BEFEHLS-HANDLER ---

    /**
     * Verarbeitet INSERT-Abfragen (unverändert)
     */
    function handleInsert(query) {
        const insertRegex = /INSERT INTO\s+([a-zA-Z0-9_]+)\s*\((.+?)\)\s+VALUES\s*\((.+?)\);/i;
        const match = query.match(insertRegex);

        if (!match) {
            throw new Error('Ungültige INSERT-Syntax. Erwartet: INSERT INTO tabelle (spalte1, spalte2) VALUES (wert1, wert2);');
        }
        
        const [_, tableName, colStr, valStr] = match;

        if (!db[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        }

        const columns = colStr.split(',').map(c => c.trim());
        const values = valStr.split(',').map(v => v.trim());

        if (columns.length !== values.length) {
            throw new Error(`Fehler: Die Anzahl der Spalten (${columns.length}) stimmt nicht mit der Anzahl der Werte (${values.length}) überein.`);
        }

        const newRow = {};
        for (let i = 0; i < columns.length; i++) {
            const col = columns[i];
            const valStr = values[i];
            let parsedValue;
            const cleanedValStr = valStr.replace(/['"]/g, '');
            if (!isNaN(parseFloat(cleanedValStr)) && isFinite(cleanedValStr)) {
                parsedValue = parseFloat(cleanedValStr);
            } else {
                parsedValue = cleanedValStr;
            }
            newRow[col] = parsedValue;
        }

        if (db[tableName].length > 0) {
            const firstRow = db[tableName][0];
            for (const col of columns) {
                if (!firstRow.hasOwnProperty(col)) {
                    throw new Error(`Fehler: Spalte '${col}' existiert nicht in Tabelle '${tableName}'.`);
                }
            }
        }

        db[tableName].push(newRow);
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

    /**
     * (NEU) Führt den WHERE-Teil des Plans aus.
     * (Wrapper um die bestehende evaluateCondition-Funktion)
     */
/**
     * (AKTUALISIERT) Führt den WHERE-Teil des Plans aus.
     * Unterstützt jetzt mehrere 'AND'-Bedingungen.
     */
/**
     * (AKTUALISIERT) Führt den WHERE-Teil des Plans aus.
     * Unterstützt jetzt 'AND'- und 'OR'-Bedingungen.
     * (Priorität: AND wird VOR OR ausgewertet)
     */
    /**
     * (AKTUALISIERT) Führt den WHERE-Teil des Plans aus.
     * Unterstützt AND/OR, entfernt Klammern UND
     * unterstützt 'NOT' vor einer Bedingung.
     */
    function executeWhere(data, whereClause) {
        // Entfernt alle Klammern, um den einfachen Split-Parser nicht zu verwirren.
        const cleanClause = whereClause.replace(/[()]/g, ''); 

        // 1. Teile bei "OR" auf
        const orGroups = cleanClause.split(/ OR /i).map(c => c.trim());

        // 2. Filtere die Daten
        return data.filter(row => {
            
            // 3. Prüfe, ob IRGENDEINE OR-Gruppe wahr ist
            return orGroups.some(andGroupStr => {
                
                // 4. Innerhalb jeder OR-Gruppe, teile bei "AND"
                const andConditions = andGroupStr.split(/ AND /i).map(c => c.trim());
                
                // 5. Prüfe, ob ALLE AND-Bedingungen wahr sind
                return andConditions.every(originalConditionStr => {
                    let conditionStr = originalConditionStr;
                    let isNegated = false; // Flag für NOT

                    // --- HIER IST DIE NEUE LOGIK ---
                    // Prüfen, ob die Bedingung mit NOT beginnt (Groß/Kleinschreibung egal)
                    if (conditionStr.toUpperCase().startsWith('NOT ')) {
                        isNegated = true;
                        // "NOT " (4 Zeichen) von der Bedingung entfernen
                        conditionStr = conditionStr.substring(4).trim();
                    }
                    // --- ENDE DER NEUEN LOGIK ---

                    try {
                        // Bewerte die *saubere* Bedingung (z.B. "age > 20")
                        const result = evaluateCondition(row, conditionStr);
                        
                        // Wenn 'NOT' davor stand, kehre das Ergebnis um
                        // ansonsten gib das normale Ergebnis zurück
                        return isNegated ? !result : result;

                    } catch (e) {
                        throw new Error(`Fehler in der WHERE-Klausel bei '${originalConditionStr}': ${e.message}`);
                    }
                });
            });
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


    // --- 8. ALLGEMEINE HELPER-FUNKTIONEN (Unverändert) ---

    /**
     * (Unverändert) Wertet eine WHERE-Bedingung aus.
     */
    function evaluateCondition(row, condition) {
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
        const compareValueStr = valStr.replace(/['"]/g, '');
        let compareValue;
        if (!isNaN(parseFloat(compareValueStr)) && isFinite(compareValueStr)) {
            compareValue = parseFloat(compareValueStr);
        } else {
            compareValue = compareValueStr;
        }
        
        switch (operator) {
            case '=':
                return rowValue == compareValue;
            case '>':
                return rowValue > compareValue;
            case '<':
                return rowValue < compareValue;
            default:
                return false;
        }
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

    function displayError(message) {
        outputDiv.innerHTML = `<div class="error">${message}</div>`;
    }
});