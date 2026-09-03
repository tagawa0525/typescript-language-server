/*
 * Copyright (C) 2026 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { readFileSync } from 'node:fs';

/** The version of this package (typescript-language-server), from package.json. */
export const version: string = (
    JSON.parse(readFileSync(new URL('../package.json', import.meta.url), { encoding: 'utf8' })) as { version: string; }
).version;
