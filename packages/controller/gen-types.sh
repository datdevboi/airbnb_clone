#! /bin/bash
apollo-codegen introspect-schema http://localhost:4000 --output schema.json
apollo-codegen generate src/**/*.tsx --schema schema.json --target ts-modern --output operation-result-types.ts
# Flow
