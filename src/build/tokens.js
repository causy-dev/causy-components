import StyleDictionary  from 'style-dictionary';
import { registerTransforms } from '@tokens-studio/sd-transforms';
// will register them on StyleDictionary object
// that is installed as a dependency of this package.
registerTransforms(StyleDictionary);

const sd = new StyleDictionary({ source: ['src/tokens/tokens.json'], platforms: {
    css: {
        transformGroup: 'tokens-studio',
        buildPath: 'src/assets/generated/',
        files: [{
          destination: 'variables.css',
          format: 'css/variables',
        }],
  }} });
await sd.buildAllPlatforms();
sd.cleanAllPlatforms();
sd.buildAllPlatforms();
