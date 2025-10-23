// Wait for the DOM to be fully loaded before setting up listeners
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOCK DATABASE ---
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
            { id: 117, name: 'Desk Lamp', category: 'Homeware', price: 35, stock: 0 },
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

    // --- 1.5 NEUES SCHEMA-OBJEKT ---
    // Hier speichern wir die Struktur (Spalten, Primary Keys)
    const dbSchema = {};

    /**
     * (AKTUALISIERT) Initialisiert das Schema für die hartcodierten Tabellen
     * "Errät" jetzt auch AUTOINCREMENT-Spalten
     */
    function initializeSchema() {
        for (const tableName in db) {
            if (db[tableName].length > 0) {
                const firstRow = db[tableName][0];
                const columns = Object.keys(firstRow);
                let pk = null;
                let ai = null;
                
                // Einfache Annahme für PK/AI für unsere Beispieldaten
                if (columns.includes('id')) { pk = 'id'; ai = 'id'; }
                else if (columns.includes('order_id')) { pk = 'order_id'; ai = 'order_id'; }
                
                dbSchema[tableName] = {
                    columns: columns,
                    primaryKey: pk,
                    autoincrement: ai // (NEU)
                };
            } else {
                dbSchema[tableName] = { columns: [], primaryKey: null, autoincrement: null };
            }
        }
    }

    // (NEU) Speichert den NÄCHSTEN verfügbaren Wert für eine AI-Spalte
    const dbSequences = {};

    /**
     * (NEU) Initialisiert die Sequenzen für die hartcodierten Tabellen
     * Findet den höchsten Wert und setzt den Zähler auf +1
     */
    function initializeSequences() {
        for (const tableName in dbSchema) {
            const schema = dbSchema[tableName];
            const aiCol = schema.autoincrement;
            
            if (aiCol && db[tableName].length > 0) {
                // Finde den höchsten Wert in der Spalte
                const maxVal = Math.max(...db[tableName].map(row => row[aiCol] || 0));
                // Setze den *nächsten* Wert
                dbSequences[tableName] = maxVal + 1;
            } else if (aiCol) {
                // Tabelle ist leer
                dbSequences[tableName] = 1;
            }
        }
    }

    // Schema und Sequenzen beim Laden der Seite initialisieren
    initializeSchema();
    initializeSequences(); // Muss nach initializeSchema aufgerufen werden

    // --- 2. GET DOM ELEMENTS ---
    const queryInput = document.getElementById('sql-query');
    const runButton = document.getElementById('run-button');
    const outputDiv = document.getElementById('results-output');
    const messageDiv = document.getElementById('results-message');

    // --- 3. EVENT LISTENER ---
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
    /**
     * (AKTUALISIERT) Erkennt jetzt CREATE TABLE.
     */
    function parseAndExecute(query) {
        const normalizedQuery = query.replace(/\s+/g, ' ').trim();
        const upperQuery = normalizedQuery.toUpperCase();

        if (!normalizedQuery.endsWith(';')) {
            throw new Error("Syntax-Fehler: Jede Abfrage muss mit einem Semikolon (';') enden.");
        }

        // --- NEUER BEFEHL ---
        if (upperQuery.startsWith('CREATE TABLE ')) {
            return handleCreateTable(normalizedQuery);
        }
        // ---
        
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
    
    /**
     * (NEU) Handler für CREATE TABLE
     */
    function handleCreateTable(query) {
        const plan = buildCreatePlan(query);
        const result = executeCreate(plan);
        return { message: result };
    }

    /**
     * (AKTUALISIERT) Verarbeitet SELECT-Abfragen über eine Pipeline.
     * Gibt jetzt ein Objekt { data, headers } zurück.
     */
    function handleSelect(query) {
        // 1. PARSING
        const plan = buildQueryPlan(query);
        
        // 2. EXECUTION: Die Pipeline
        let data = executeFrom(plan);
        const allColumns = getPrefixedColumnsFromPlan(plan);

        if (plan.where) {
            data = executeWhere(data, plan.where, allColumns);
        }

        // c. SELECT
        const selectResult = executeSelect(data, plan.select, allColumns);
        let finalData = selectResult.data;
        const finalHeaders = selectResult.headers; // <-- Header hier merken

        // d. DISTINCT
        if (plan.distinct) {
            finalData = executeDistinct(finalData);
        }

        // e. ORDER BY
        if (plan.orderBy) {
            finalData = executeOrderBy(finalData, plan.orderBy, allColumns);
        }

        // f. LIMIT (TOP)
        if (plan.limit !== null) {
            // Korrigiert: plan.limit übergeben
            finalData = executeLimit(finalData, plan.limit); 
        }

        // 3. Gib das finale Objekt zurück
        return { data: finalData, headers: finalHeaders };
    }
    
   /**
     * (STARK AKTUALISIERT) Verwendet jetzt 'dbSchema' für Validierung und PK-Check
     * Erzwingt NOT NULL für PKs und fügt AUTOINCREMENT-Werte automatisch ein.
     */
    function handleInsert(query) {
        const insertRegex = /INSERT INTO\s+([a-zA-Z0-9_]+)(?:\s*\((.+?)\))?\s+VALUES\s*\((.+?)\);/i;
        const match = query.match(insertRegex);
        if (!match) throw new Error('Ungültige INSERT-Syntax. Erwartet: ... VALUES ...');
        
        const [_, tableName, colStr, valStr] = match;

        if (!db[tableName] || !dbSchema[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        }
        const schema = dbSchema[tableName];
        const pk = schema.primaryKey;
        const autoIncCol = schema.autoincrement;
        
        const values = valStr.split(',').map(v => v.trim());
        let columns;

        if (colStr) {
            columns = colStr.split(',').map(c => c.trim());
            for (const col of columns) {
                if (!schema.columns.includes(col)) {
                    throw new Error(`Fehler: Spalte '${col}' existiert nicht in Tabelle '${tableName}'.`);
                }
            }
            if (autoIncCol && columns.includes(autoIncCol)) {
                 throw new Error(`Fehler: Spalte '${autoIncCol}' ist AUTOINCREMENT und darf nicht manuell gesetzt werden.`);
            }
        } else {
            if (autoIncCol) {
                throw new Error(`Fehler: Bei Tabellen mit AUTOINCREMENT muss die Spaltenliste (ohne die ID-Spalte) angegeben werden. Z.B. INSERT INTO ${tableName} (name, ...) VALUES (...);`);
            }
            columns = schema.columns;
        }

        if (columns.length !== values.length) {
            throw new Error(`Fehler: Anzahl Spalten (${columns.length}) passt nicht zu Werten (${values.length}).`);
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

        if (autoIncCol) {
            const nextVal = dbSequences[tableName];
            newRow[autoIncCol] = nextVal;
            dbSequences[tableName]++;
        }

        if (pk) {
            const newPkValue = newRow[pk];
            if (newPkValue == null) {
                throw new Error(`PRIMARY KEY-Verletzung: Spalte '${pk}' darf nicht NULL sein.`);
            }
            const exists = db[tableName].some(row => row[pk] == newPkValue);
            if (exists) {
                throw new Error(`PRIMARY KEY-Verletzung: Ein Eintrag mit ${pk} = ${newPkValue} existiert bereits.`);
            }
        }

        db[tableName].push(newRow);
        return { message: `1 Zeile erfolgreich in '${tableName}' eingefügt.` };
    }

   /**
     * (AKTUALISIERT) Verwendet jetzt 'dbSchema' für Validierung
     * Übergibt PK an executeUpdate für erweiterte Prüfungen.
     */
    function handleUpdate(query) {
        const plan = buildUpdatePlan(query);
        
        const schema = dbSchema[plan.table];
        if (!schema) {
            throw new Error(`Fehler: Tabelle '${plan.table}' nicht gefunden.`);
        }
        
        const allColumns = schema.columns.map(col => `${plan.table}.${col}`);
        
        const updateCount = executeUpdate(plan, allColumns, schema.primaryKey);
        return { message: `${updateCount} Zeile(n) erfolgreich aktualisiert.` };
    }

    /**
     * (AKTUALISIERT) Verwendet jetzt 'dbSchema' für Validierung
     */
    function handleDelete(query) {
        const plan = buildDeletePlan(query);

        if (!dbSchema[plan.table]) {
            throw new Error(`Fehler: Tabelle '${plan.table}' nicht gefunden.`);
        }

        const allColumns = dbSchema[plan.table].columns.map(col => `${plan.table}.${col}`);
        
        const deleteCount = executeDelete(plan, allColumns);
        return { message: `${deleteCount} Zeile(n) erfolgreich gelöscht.` };
    }


    // --- 6. PARSING-HILFSFUNKTIONEN ---

    /**
     * (AKTUALISIERT) Zerlegt die CREATE TABLE-Abfrage
     * Erkennt jetzt 'AUTOINCREMENT' oder 'AUTO_INCREMENT'
     */
    function buildCreatePlan(query) {
        const plan = { columns: [], primaryKey: null, autoincrement: null };
        
        const tableMatch = query.match(/CREATE TABLE\s+([a-zA-Z0-9_]+)\s*\((.+)\);/i);
        if (!tableMatch) throw new Error("Ungültige CREATE TABLE Syntax. Erwartet: CREATE TABLE name (col1 type, ...);");
        
        plan.table = tableMatch[1];
        
        const defs = tableMatch[2].split(',').map(d => d.trim());

        for (const def of defs) {
            const defUpper = def.toUpperCase();
            
            if (defUpper.startsWith('PRIMARY KEY')) {
                const pkMatch = def.match(/PRIMARY KEY\s*\((.+?)\)/i);
                if (!pkMatch) throw new Error("Ungültige PRIMARY KEY Syntax. Erwartet: PRIMARY KEY(colName)");
                plan.primaryKey = pkMatch[1].trim();
            } else {
                const parts = def.split(/\s+/);
                const colName = parts[0].trim();
                plan.columns.push(colName);
                
                if (defUpper.includes('AUTOINCREMENT') || defUpper.includes('AUTO_INCREMENT')) {
                    plan.autoincrement = colName;
                }
            }
        }
        
        if (plan.primaryKey && !plan.columns.includes(plan.primaryKey)) {
            throw new Error(`Fehler: Der PRIMARY KEY '${plan.primaryKey}' ist nicht als Spalte definiert.`);
        }
        
        if (plan.autoincrement && plan.primaryKey !== plan.autoincrement) {
            throw new Error(`Fehler: Die AUTOINCREMENT-Spalte '${plan.autoincrement}' muss auch als PRIMARY KEY definiert sein.`);
        }
        
        return plan;
    }

    /**
     * (AKTUALISIERT) buildQueryPlan (SELECT)
     * Erkennt jetzt JOIN, DISTINCT, TOP und LIMIT.
     */
    function buildQueryPlan(query) {
        const plan = {
            limit: null,
            distinct: false,
            joins: [],
            where: null,
            orderBy: null
        };

        const fromMatch = query.match(/FROM\s+([a-zA-Z0-9_]+)((?:\s+(?:INNER\s+)?JOIN\s+[a-zA-Z0-9_]+\s+ON\s+.+?)+)/i);
        if (fromMatch) {
            plan.from = fromMatch[1];
            const joinRegex = /(?:INNER\s+)?JOIN\s+([a-zA-Z0-9_]+)\s+ON\s+([a-zA-Z0-9_\.]+\s*=\s*[a-zA-Z0-9_\.]+)/gi;
            let joinMatch;
            while ((joinMatch = joinRegex.exec(fromMatch[2])) !== null) {
                plan.joins.push({
                    table: joinMatch[1],
                    on: joinMatch[2]
                });
            }
        } else {
            const simpleFromMatch = query.match(/FROM\s+([a-zA-Z0-9_]+)/i);
            if (!simpleFromMatch) throw new Error("Syntax-Fehler: 'FROM'-Klausel nicht gefunden.");
            plan.from = simpleFromMatch[1];
        }

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
        
        plan.select = parseSelectColumns(selectClause);

        const whereMatch = query.match(/WHERE\s+(.+?)(?:\s+ORDER BY|\s+LIMIT|;|$)/i);
        if (whereMatch) plan.where = whereMatch[1].trim();

        const orderByMatch = query.match(/ORDER BY\s+(.+?)(?:\s+LIMIT|;|$)/i);
        if (orderByMatch) plan.orderBy = parseOrderBy(orderByMatch[1]);

        const limitMatch = query.match(/LIMIT\s+([0-9]+)\s*;?$/i);
        if (limitMatch) {
            const limitValue = parseInt(limitMatch[1]);
            if (plan.limit !== null) {
                throw new Error("Syntax-Fehler: Es können nicht 'TOP' und 'LIMIT' gleichzeitig verwendet werden.");
            }
            plan.limit = limitValue;
        }

        return plan;
    }
    
    // (parseSelectColumns, parseOrderBy - unverändert)
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

    /**
     * (AKTUALISIERT) buildUpdatePlan (Validiert SET gegen Schema)
     */
    function buildUpdatePlan(query) {
        const plan = {};
        const updateMatch = query.match(/UPDATE\s+([a-zA-Z0-9_]+)\s+SET/i);
        if (!updateMatch) throw new Error("Syntax-Fehler: 'UPDATE table SET' nicht gefunden.");
        
        plan.table = updateMatch[1];
        const schema = dbSchema[plan.table];
        if (!schema) throw new Error(`Fehler: Tabelle '${plan.table}' nicht gefunden.`);

        const setMatch = query.match(/SET\s+(.+?)(?:\s+WHERE|;|$)/i);
        if (!setMatch) throw new Error("Syntax-Fehler: 'SET'-Klausel nicht gefunden.");
        
        plan.setClauses = setMatch[1].split(',').map(clause => {
            const parts = clause.split('=');
            if (parts.length !== 2) throw new Error(`Syntax-Fehler in SET-Klausel: '${clause}'`);
            
            const column = parts[0].trim();
            if (!schema.columns.includes(column)) {
                throw new Error(`Fehler: Spalte '${column}' in SET-Klausel nicht in Tabelle '${plan.table}'.`);
            }
            
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
    
    // (buildDeletePlan - unverändert)
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
     * (AKTUALISIERT) Führt den CREATE-Plan aus
     * Initialisiert jetzt die Sequenz für AUTOINCREMENT
     */
    function executeCreate(plan) {
        const tableName = plan.table;
        if (db[tableName] || dbSchema[tableName]) {
            throw new Error(`Fehler: Tabelle '${tableName}' existiert bereits.`);
        }
        
        db[tableName] = [];
        
        dbSchema[tableName] = {
            columns: plan.columns,
            primaryKey: plan.primaryKey,
            autoincrement: plan.autoincrement
        };
        
        if (plan.autoincrement) {
            dbSequences[tableName] = 1;
        }
        
        return `Tabelle '${tableName}' erfolgreich erstellt.`;
    }

    /**
     * (AKTUALISIERT) executeFrom (Validiert gegen Schema)
     */
    function executeFrom(plan) {
        const baseTable = plan.from;
        if (!db[baseTable] || !dbSchema[baseTable]) {
            throw new Error(`Fehler: Tabelle '${baseTable}' nicht gefunden.`);
        }

        let data = db[baseTable].map(row => prefixColumns(baseTable, row));

        for (const join of plan.joins) {
            const joinTable = join.table;
            if (!db[joinTable] || !dbSchema[joinTable]) {
                throw new Error(`Fehler: JOIN-Tabelle '${joinTable}' nicht gefunden.`);
            }

            const joinData = db[joinTable].map(row => prefixColumns(joinTable, row));
            const onMatch = join.on.match(/([a-zA-Z0-9_\.]+)\s*=\s*([a-zA-Z0-9_\.]+)/);
            if (!onMatch) throw new Error(`Syntax-Fehler in ON-Klausel: '${join.on}'.`);
            
            const [_, col1, col2] = onMatch.map(s => s.trim());

            const joinedData = [];
            for (const rowA of data) {
                for (const rowB of joinData) {
                    const mergedRow = { ...rowA, ...rowB };
                    if (mergedRow[col1] == mergedRow[col2]) {
                        joinedData.push(mergedRow);
                    }
                }
            }
            data = joinedData;
        }
        
        return data;
    }

    // (executeWhere - unverändert)
    function executeWhere(data, whereClause, allColumns) {
        const jsClause = convertSqlWhereToJs(whereClause, allColumns);
        return data.filter(row => {
            try {
                return evaluateJsExpression(row, jsClause);
            } catch (e) {
                throw new Error(`Fehler beim Auswerten der WHERE-Klausel '${jsClause}': ${e.message}`);
            }
        });
    }

    /**
     * (AKTUALISIERT) Führt den SELECT-Teil aus.
     * Gibt jetzt ein { data, headers } Objekt zurück.
     */
    function executeSelect(data, selectPlan, allColumns) {
        const isAggregateQuery = selectPlan.some(col => col.func);

        if (isAggregateQuery) {
            const isPureAggregate = selectPlan.every(col => col.func);
            if (!isPureAggregate) {
                const nonAggCol = selectPlan.find(col => !col.func).expr;
                throw new Error(`Fehler: Die Spalte '${nonAggCol}' ist nicht in einer Aggregatfunktion.`);
            }
            const headers = selectPlan.map(col => col.alias);
            const resultRow = {};
            for (const col of selectPlan) {
                resultRow[col.alias] = calculateAggregate(data, col.func, col.expr, allColumns);
            }
            return { data: [resultRow], headers: headers };

        } else {
            if (selectPlan.length === 1 && selectPlan[0].expr === '*') {
                const prefixes = new Set(allColumns.map(col => col.split('.')[0]));
                if (prefixes.size === 1) {
                    const tableName = allColumns[0].split('.')[0];
                    const headers = dbSchema[tableName] ? dbSchema[tableName].columns : [];
                    const finalData = data.map(row => unPrefixColumns(row));
                    return { data: finalData, headers: headers };
                }
                return { data: data, headers: allColumns };
            }

            const headers = selectPlan.map(col => col.alias);
            const finalData = data.map(row => {
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
            return { data: finalData, headers: headers };
        }
    }

    // (executeOrderBy - unverändert)
    function executeOrderBy(data, orderByPlan, allColumns) {
        const { column, direction } = orderByPlan;
        let sortKey;
        if (data.length > 0 && data[0].hasOwnProperty(column)) {
            sortKey = column;
        } else {
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

    /**
     * (AKTUALISIERT) Führt den UPDATE-Plan aus.
     * Prüft jetzt auf PK-Verletzungen (NULL und Duplikate).
     */
    function executeUpdate(plan, allColumns, primaryKey) { // primaryKey als neuer Parameter
        const tableName = plan.table;
        if (!db[tableName]) throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        
        let updateCount = 0;
        
        db[tableName].forEach(row => {
            let matchesWhere = true;
            if (plan.where) {
                const prefixedRow = prefixColumns(tableName, row);
                matchesWhere = executeWhere([prefixedRow], plan.where, allColumns).length > 0;
            }
            if (matchesWhere) {
                updateCount++;
                const updatedRow = { ...row }; 
                plan.setClauses.forEach(clause => {
                    const { column, value } = clause;
                    if (column === primaryKey && value == null) {
                        throw new Error(`PRIMARY KEY-Verletzung: Spalte '${primaryKey}' darf nicht NULL sein.`);
                    }
                    updatedRow[column] = value;
                });
                if (primaryKey) {
                    const newPkValue = updatedRow[primaryKey];
                    const oldPkValue = row[primaryKey];
                    if (newPkValue != oldPkValue) { 
                        const exists = db[tableName].some(r => r[primaryKey] == newPkValue);
                        if (exists) {
                            throw new Error(`PRIMARY KEY-Verletzung: Ein Eintrag mit ${primaryKey} = ${newPkValue} existiert bereits.`);
                        }
                    }
                }
                Object.assign(row, updatedRow);
            }
        });
        return updateCount;
    }

    // (executeDelete - unverändert)
    function executeDelete(plan, allColumns) {
        const tableName = plan.table;
        if (!db[tableName]) throw new Error(`Fehler: Tabelle '${tableName}' nicht gefunden.`);
        const originalLength = db[tableName].length;
        let rowsToKeep;
        if (plan.where) {
            rowsToKeep = db[tableName].filter(row => {
                const prefixedRow = prefixColumns(tableName, row);
                const matchesWhere = executeWhere([prefixedRow], plan.where, allColumns).length > 0;
                return !matchesWhere;
            });
        } else {
            rowsToKeep = [];
        }
        db[tableName] = rowsToKeep;
        const deleteCount = originalLength - db[tableName].length;
        return deleteCount;
    }
    
    // (executeDistinct, executeLimit - unverändert)
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
     * (NEU) Holt alle präfixierten Spalten aus dem Schema für einen Plan
     */
    function getPrefixedColumnsFromPlan(plan) {
        let allColumns = [];
        if (dbSchema[plan.from]) {
            allColumns.push(...dbSchema[plan.from].columns.map(col => `${plan.from}.${col}`));
        }
        for (const join of plan.joins) {
            if (dbSchema[join.table]) {
                allColumns.push(...dbSchema[join.table].columns.map(col => `${join.table}.${col}`));
            }
        }
        return allColumns;
    }
    
    // (prefixColumns, unPrefixColumns - unverändert)
    function prefixColumns(tableName, row) {
        const newRow = {};
        for (const key in row) {
            newRow[`${tableName}.${key}`] = row[key];
        }
        return newRow;
    }

    function unPrefixColumns(row) {
        const newRow = {};
        for (const key in row) {
            newRow[key.split('.')[1] || key] = row[key];
        }
        return newRow;
    }

    // (resolveColumnName, resolveColumnNames - unverändert)
    function resolveColumnName(colName, allColumns) {
        if (colName.includes('.')) {
            if (allColumns.includes(colName)) return colName;
            throw new Error(`Fehler: Spalte '${colName}' nicht gefunden.`);
        }
        const matches = allColumns.filter(col => col.endsWith(`.${colName}`));
        if (matches.length === 1) return matches[0];
        if (matches.length > 1) throw new Error(`Fehler: Spaltenname '${colName}' ist mehrdeutig.`);
        throw new Error(`Fehler: Spalte '${colName}' nicht gefunden.`);
    }

    function resolveColumnNames(expression, allColumns) {
        return expression.replace(/\b([a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)?)\b/g, (match) => {
            if (!isNaN(parseFloat(match))) return match;
            const resolvedCol = resolveColumnName(match, allColumns);
            return `row["${resolvedCol}"]`;
        });
    }

    // (convertSqlWhereToJs - unverändert)
    /**
     * (AKTUALISIERT) Übersetzt SQL WHERE in JS.
     * Erkennt jetzt alle Vergleiche: >=, <=, !=, <>
     */
    function convertSqlWhereToJs(clause, allColumns) {
        let jsClause = clause;
        const res = (col) => resolveColumnNames(col, allColumns);

        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+IS\s+NOT\s+NULL\b/gi, (m, col) => `${res(col)} != null`);
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+IS\s+NULL\b/gi, (m, col) => `${res(col)} == null`);
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s+(NOT\s+)?LIKE\s+(["'](.*?)["'])/gi, (m, col, notOp, strLit, pattern) => {
            const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regexPattern = escapedPattern.replace(/%/g, '.*').replace(/_/g, '.');
            const jsTest = `(new RegExp('^${regexPattern}$', 'i')).test(String(${res(col)}))`;
            return (notOp) ? `!${jsTest}` : jsTest;
        });
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
        jsClause = jsClause.replace(/\bAND\b/gi, ' && ').replace(/\bOR\b/gi, ' || ').replace(/\bNOT\b/gi, ' ! ');
        jsClause = jsClause.replace(/\b([a-zA-Z0-9_\.]+)\s*(>=|<=|!=|<>|=|>|<)\s*([a-zA-Z0-9_\.]+|["'].*?["']|[0-9\.]+)/gi, (match, col1, op, val) => {
            let jsOp = op;
            if (op === '=') jsOp = '==';
            if (op === '<>') jsOp = '!=';
            const jsCol1 = res(col1);
            if (val.startsWith("'") || val.startsWith('"')) {
                return `(String(${jsCol1}).toLowerCase() ${jsOp} ${val.toLowerCase()})`;
            } else if (!isNaN(parseFloat(val))) {
                return `(${jsCol1} ${jsOp} ${val})`;
            } else {
                const jsCol2 = res(val);
                return `(${jsCol1} ${jsOp} ${jsCol2})`;
            }
        });
        return jsClause;
    }

    // (evaluateJsExpression - unverändert)
    function evaluateJsExpression(row, jsExpression) {
        try {
            const evaluator = new Function('row', `'use strict'; return ${jsExpression};`);
            return evaluator(row);
        } catch (e) {
            throw new Error(`Fehler beim Auswerten von JS: '${jsExpression}'. Fehler: ${e.message}`);
        }
    }

    // (calculateAggregate - unverändert)
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
    
    // (displayResults, displayError - unverändert)
    /**
     * (AKTUALISIERT) Zeigt die Ergebnisse an.
     * Verarbeitet jetzt { data, headers } und zeigt Header auch bei 0 Zeilen an.
     */
    function displayResults(result) {
        // Fall 1: Erfolgsmeldung (INSERT, UPDATE, DELETE, CREATE)
        if (result.message) {
            messageDiv.textContent = result.message;
            outputDiv.innerHTML = '';
            return;
        }

        // Fall 2: SELECT-Ergebnisobjekt
        if (result.data !== undefined && result.headers !== undefined) {
            const data = result.data;
            const headers = result.headers;

            // Erfolgsmeldung (0 oder N Zeilen)
            if (data.length === 0) {
                messageDiv.textContent = 'Abfrage erfolgreich ausgeführt. 0 Zeilen zurückgegeben.';
            } else {
                messageDiv.textContent = `Abfrage erfolgreich ausgeführt. ${data.length} Zeilen zurückgegeben.`;
            }

            // Wenn keine Header definiert sind (seltsamer Fall), nichts tun
            if (headers.length === 0) {
                return;
            }

            // --- NEUE LOGIK: Tabelle IMMER zeichnen ---
            const table = document.createElement('table');
            
            // 1. Header zeichnen
            const thead = table.createTHead();
            const headerRow = thead.insertRow();
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            // 2. Datenzeilen zeichnen, NUR WENN VORHANDEN
            if (data.length > 0) {
                const tbody = table.createTBody();
                data.forEach(rowData => {
                    const row = tbody.insertRow();
                    headers.forEach(header => {
                        const cell = row.insertCell();
                        cell.textContent = rowData[header] === null ? 'null' : rowData[header];
                    });
                });
            }

            outputDiv.appendChild(table);
        }
    }
    
    function displayError(message) {
        outputDiv.innerHTML = `<div class="error">${message}</div>`;
    }
});