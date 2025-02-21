const { parse } = require('@vue/compiler-sfc');
const fs = require('fs');

const analyzeVueFile = (filePath) => {
  const source = fs.readFileSync(filePath, 'utf8');
  const { descriptor, errors } = parse(source, {
    ignoreEmpty: true
  });
  // console.log(descriptor);
  console.log(descriptor.template.loc);

  return {
    templateLength: descriptor.template?.content.length || 0,
    scriptLength: descriptor.script?.content.length || 0,
    propCount: descriptor.scriptSetup?.content.match(/defineProps\((.*?)\)/g)?.length || 0
  };
};

console.log(analyzeVueFile('test.vue'));
