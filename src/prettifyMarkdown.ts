import prettier, { BuiltInParserName } from 'prettier';

export const prettierParsers = [
    'angular',
    'babel-flow',
    'babel-ts',
    'babel',
    'css',
    'espree',
    'flow',
    'glimmer',
    'graphql',
    'html',
    'json-stringify',
    'json',
    'json5',
    'less',
    'lwc',
    'markdown',
    'mdx',
    'meriyah',
    'scss',
    'typescript',
    'vue',
    'yaml',
];

const mapParsers: Record<string, string> = {
    javascript: 'typescript',
};

export const prettifyMarkdown = (markdown: string): string => {
    const regex = /(^```[^`]+^```)/gim;

    return markdown.replace(regex, (block: string) => {
        const languageRegex = /\`\`\`([a-zA-Z]+)/;
        const match = block.match(languageRegex);

        // markdown has no blocks
        if (!match) {
            return block;
        }

        const language = match[1];
        const parser = mapParsers[language] || language;
        const parserExists = prettierParsers.includes(parser);

        // no parser for this language
        if (!parserExists) {
            return block;
        }

        let formattedBlock;

        try {
            const lines = block.split('\n');
            const firstLine = lines.shift();
            const lastLine = lines.pop();

            formattedBlock = prettier.format(lines.join('\n'), {
                parser,
            });

            formattedBlock = firstLine + '\n' + formattedBlock + lastLine;
        } catch (err) {
            // error thrown while formatting block
            return block;
        }

        return formattedBlock;
    });
};
