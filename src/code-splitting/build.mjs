import {loadConfigFile} from 'rollup/loadConfigFile';
import path from 'path';
import {rollup} from 'rollup';
import { fileURLToPath } from 'url';

const _dirname = fileURLToPath(new URL('.', import.meta.url))

loadConfigFile(path.resolve(_dirname, 'rollup.config.mjs'), {
  format: 'es'
}).then(async ({options, warnings}) => {
  // "warnings" wraps the default `onwarn` handler passed by the CLI.
	// This prints all warnings up to this point:
	console.log(`We currently have ${warnings.count} warnings`);

	// This prints all deferred warnings
	warnings.flush();

  for (const optionsObj of options) {
		const bundle = await rollup(optionsObj);
		await Promise.all(optionsObj.output.map(bundle.write));
	}
})