let common = [
  'test/features/**/*.feature',
  '--require-module ts-node/register',
  '--require test/step-definitions/**/*.ts',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty'
].join(' ');

module.exports = {
  default: common 
};