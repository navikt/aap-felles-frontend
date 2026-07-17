module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'es5',
  importOrder: ['^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};
