#!/usr/bin/env bun

/**
 * Benchmark script to measure Bun performance
 * Run with: bun scripts/benchmark.ts
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

interface BenchmarkResult {
  operation: string;
  timeMs: number;
  timeSeconds: string;
}

function writeOutput(message: string): void {
  process.stdout.write(`${message}\n`);
}

function timeOperation(operation: string, command: string): BenchmarkResult {
  const start = performance.now();

  try {
    execSync(command, { stdio: 'pipe', cwd: process.cwd() });
    const end = performance.now();
    const timeMs = end - start;

    return {
      operation,
      timeMs,
      timeSeconds: (timeMs / 1000).toFixed(2),
    };
  } catch (error) {
    console.error(`Error running ${operation}:`, error);

    return {
      operation,
      timeMs: -1,
      timeSeconds: 'ERROR',
    };
  }
}

function formatTime(seconds: number): string {
  if (seconds < 1) {
    return `${(seconds * 1000).toFixed(0)}ms`;
  }

  return `${seconds.toFixed(2)}s`;
}

writeOutput('🚀 Bun Performance Benchmark');
writeOutput('='.repeat(50));

const results: BenchmarkResult[] = [];

// 1. Clean install (if node_modules exists, remove it first)
if (existsSync('node_modules')) {
  writeOutput('\n📦 Running clean install benchmark...');
  execSync('rm -rf node_modules', { stdio: 'pipe' });
  const installResult = timeOperation(
    'Clean Install',
    'bun install --frozen-lockfile',
  );

  results.push(installResult);
  writeOutput(
    `   ✓ ${installResult.operation}: ${formatTime(parseFloat(installResult.timeSeconds))}`,
  );
}

// 2. Install with cache (simulating typical workflow)
writeOutput('\n📦 Running cached install benchmark...');
execSync('rm -rf node_modules', { stdio: 'pipe' });
const cachedInstallResult = timeOperation('Cached Install', 'bun install');

results.push(cachedInstallResult);
writeOutput(
  `   ✓ ${cachedInstallResult.operation}: ${formatTime(parseFloat(cachedInstallResult.timeSeconds))}`,
);

// 3. Build
writeOutput('\n🔨 Running build benchmark...');
const buildResult = timeOperation('Build', 'bun run build');

results.push(buildResult);
writeOutput(
  `   ✓ ${buildResult.operation}: ${formatTime(parseFloat(buildResult.timeSeconds))}`,
);

// 4. Lint
writeOutput('\n🔍 Running lint benchmark...');
const lintResult = timeOperation('Lint', 'bun run lint');

results.push(lintResult);
writeOutput(
  `   ✓ ${lintResult.operation}: ${formatTime(parseFloat(lintResult.timeSeconds))}`,
);

// 5. Type check
writeOutput('\n📝 Running type check benchmark...');
const typeCheckResult = timeOperation('Type Check', 'bun tsc --noEmit');

results.push(typeCheckResult);
writeOutput(
  `   ✓ ${typeCheckResult.operation}: ${formatTime(parseFloat(typeCheckResult.timeSeconds))}`,
);

// 6. Tests
writeOutput('\n🧪 Running tests benchmark...');
const testResult = timeOperation('Tests', 'bun run test');

results.push(testResult);
writeOutput(
  `   ✓ ${testResult.operation}: ${formatTime(parseFloat(testResult.timeSeconds))}`,
);

// Summary
writeOutput('\n' + '='.repeat(50));
writeOutput('\n📊 Summary:\n');

results.forEach((result) => {
  if (result.timeMs > 0) {
    writeOutput(
      `   ${result.operation.padEnd(20)} ${formatTime(parseFloat(result.timeSeconds)).padStart(10)}`,
    );
  }
});

const totalTime = results
  .filter((r) => r.timeMs > 0)
  .reduce((sum, r) => sum + r.timeMs, 0);

writeOutput('\n' + '-'.repeat(50));
writeOutput(
  `   ${'Total'.padEnd(20)} ${formatTime(totalTime / 1000).padStart(10)}`,
);

writeOutput('\n💡 Typical improvements over pnpm:');
writeOutput('   • Install: 2-3x faster');
writeOutput('   • Build: 1.5-2x faster');
writeOutput('   • Script execution: 2-4x faster');
writeOutput('   • Lockfile: Text format (bun.lock) is faster to parse\n');
