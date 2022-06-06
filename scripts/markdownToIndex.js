const fs = require('fs');
const chalk = require('chalk');
const { camelCase } = require('lodash');

const run = () => {
    const files = fs.readdirSync('fixtures').filter((i) => i.match(/\.md$/));

    const contentIndex = files
        .map((file) => {
            const variableName = camelCase(
                file.replace('fixture.', '').replace('.md', '')
            );
            const content = fs
                .readFileSync(`fixtures/${file}`)
                .toString()
                .replace(/`/g, '\\`');

            return `export const ${variableName}=\`${content}\``;
        })
        .join('\n\n');

    fs.writeFileSync('fixtures/index.ts', contentIndex);

    console.log(
        [
            chalk.magenta(files.length),
            'fixtures written to',
            chalk.cyan('fixtures/index.ts'),
        ].join(' ')
    );
};

run();
