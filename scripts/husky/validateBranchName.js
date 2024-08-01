const { execSync } = require('child_process');

const branchName = execSync('git branch --show-current', {
  encoding: 'utf-8',
}).trim();
/**
 * Название ветки должно начинаться только с 'features/' || 'bugfixes/'
 */
const allowedPrefixes = ['features/', 'bugfixes/'];

if (!allowedPrefixes.some((prefix) => branchName.startsWith(prefix))) {
  console.error(
    `Branch name "${branchName}" is invalid. It should start with "features/" or "bugfixes/".`,
  );
  process.exit(1);
}
