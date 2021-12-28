module.exports = {
    plugins: [require.resolve('@prettier/plugin-pug')],
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    // pug
    pugBracketSpacing: true,
    pugBracketSameLine: false,
    pugPrintWidth: 100,
    pugSemi: true,
    pugSingleQuote: false,
    pugTabWidth: 4,
    pugAttributeSeparator: 'always',
    pugCommentPreserveSpaces: 'keep-all',
    pugSortAttributes: 'as-is',
    pugSortAttributesBeginning: [],
    pugSortAttributesEnd: [],
    pugWrapAttributesPattern: '',
    pugWrapAttributesThreshold: -1,
};

/*
 * Documentation for prettier plugin-pug
 * https://prettier.github.io/plugin-pug/guide/
 */
