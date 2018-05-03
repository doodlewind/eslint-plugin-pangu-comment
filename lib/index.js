/**
 * @fileoverview Pangu whitespace for Chinese comments.
 * @author doodlewind
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const spacing = require('./rules/spacing')

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: {
    'spacing': spacing
  }
}
