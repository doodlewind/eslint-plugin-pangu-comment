const rule = require('../lib/rules/spacing')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()
ruleTester.run('comment', rule, {
  valid: [
    '// 123',
    '//123',
    '// 白色相簿 2',
    '// 第一次, 有了喜欢的人',
    '// 第一次，有了喜欢的人',
    '// 为什么你会这么熟练啊！你和雪菜亲过多少次了啊！？',
    `/* demo 测试 */`,
    `/** demo 测试
 **/`
  ],
  invalid: [
    {
      code: '// 白色相簿2',
      errors: [{
        message: 'Inappropriate Chinese spacing.',
        type: 'Line'
      }]
    },
    {
      code: `/* demo测试 */`,
      errors: [{
        message: 'Inappropriate Chinese spacing.',
        type: 'Block'
      }]
    },
    {
      code: `/** demo测试
      **/`,
      errors: [{
        message: 'Inappropriate Chinese spacing.',
        type: 'Block'
      }]
    }
  ]
})
