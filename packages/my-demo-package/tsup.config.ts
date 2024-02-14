import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/**/*.ts'],
	format: ['cjs', 'esm'],
	outDir: 'dist',
	dts: true,
	sourcemap: true,
	clean: true,
});
