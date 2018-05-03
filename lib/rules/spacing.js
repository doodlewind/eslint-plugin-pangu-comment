const pangu = require('pangu')

module.exports = {
  meta: {
    docs: {
      description: 'pangu Chinese comments',
      category: 'Stylistic Issues',
      recommended: false,
      url: ''
    },
    schema: []
  },
  create: function (context) {
    const sourceCode = context.getSourceCode()

    return {
      Program () {
        const comments = sourceCode.getAllComments()
        comments
          .filter(token => token.type !== 'Shebang')
          .forEach(node => {
            if (pangu.spacing(node.value) !== node.value) {
              context.report(
                node,
                'Inappropriate Chinese spacing.'
              )
            }
          })
      }
    }
  }
}
