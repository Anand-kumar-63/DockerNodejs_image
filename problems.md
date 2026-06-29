What Was Wrong & What Was Fixed
Root Cause
The project uses "type": "module" in 

package.json
, making Node.js treat all .js files as ES Modules (ESM). ESM requires explicit file extensions in import paths (e.g., ./app.js not ./app).

The old tsconfig.json had "module": "es6", which compiled TypeScript but did not enforce .js extensions — so the compiled dist/index.js emitted import app from "./app" (no extension), causing Node.js to crash with ERR_MODULE_NOT_FOUND.

Changes Made
File	Change


tsconfig.json
Changed "module" from "es6" → "NodeNext", added "moduleResolution": "NodeNext"


src/index.ts
Updated imports: "./app" → "./app.js", "./useractions" → "./useractions.js"


src/useractions.ts
Updated import: "./db" → "./db.js"