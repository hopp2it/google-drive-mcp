#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const cwd = process.cwd();
const patterns = process.argv.slice(2);

if (patterns.length === 0) {
  console.error('Usage: node scripts/run-node-tests.js <test-file-or-glob> [...]');
  process.exit(1);
}

function normalizePath(value) {
  return value.replace(/\\/g, '/');
}

function escapeRegex(value) {
  return value.replace(/[.+^${}()|[\]\\]/g, '\\$&');
}

function globToRegex(pattern) {
  const glob = normalizePath(pattern);
  let regex = '^';

  for (let index = 0; index < glob.length; index += 1) {
    const char = glob[index];
    const next = glob[index + 1];

    if (char === '*' && next === '*') {
      if (glob[index + 2] === '/') {
        regex += '(?:.*\/)?';
        index += 2;
      } else {
        regex += '.*';
        index += 1;
      }
      continue;
    }

    if (char === '*') {
      regex += '[^/]*';
      continue;
    }

    regex += escapeRegex(char);
  }

  regex += '$';
  return new RegExp(regex);
}

async function listFiles(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function globRoot(pattern) {
  const parts = normalizePath(pattern).split('/');
  const rootParts = [];

  for (const part of parts) {
    if (part.includes('*')) {
      break;
    }
    rootParts.push(part);
  }

  return path.resolve(cwd, rootParts.length > 0 ? rootParts.join(path.sep) : '.');
}

async function expandPattern(pattern) {
  if (!pattern.includes('*')) {
    const fullPath = path.resolve(cwd, pattern);
    return existsSync(fullPath) ? [fullPath] : [];
  }

  const root = globRoot(pattern);
  if (!existsSync(root)) {
    return [];
  }

  const matcher = globToRegex(pattern);
  const files = await listFiles(root);
  return files.filter((file) => matcher.test(normalizePath(path.relative(cwd, file))));
}

const testFiles = [];
const seen = new Set();

for (const pattern of patterns) {
  const matches = await expandPattern(pattern);
  if (matches.length === 0) {
    console.error(`No test files matched: ${pattern}`);
    process.exit(1);
  }

  for (const match of matches.sort()) {
    if (!seen.has(match)) {
      seen.add(match);
      testFiles.push(match);
    }
  }
}

const child = spawn(process.execPath, ['--test', ...testFiles], {
  cwd,
  env: { ...process.env, MCP_TESTING: '1' },
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    console.error(`node --test exited from signal ${signal}`);
    process.exit(1);
  }

  process.exit(code ?? 1);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});