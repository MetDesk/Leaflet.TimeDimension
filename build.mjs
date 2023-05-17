import * as esbuild from 'esbuild';

const environment = process.env.NODE_ENV || 'production';
const isProd = environment === 'production';

await esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  outfile: 'dist/leaflet.timedimension.src.js',
});

await esbuild.build({
  entryPoints: ['src/leaflet.timedimension.control.css'],
  bundle: true,
  outdir: 'dist',
});
