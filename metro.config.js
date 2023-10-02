/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// const { getDefaultConfig } = require("../../expo/packages/@expo/metro-config");
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true
})

config.resolver.sourceExts.push('svg')
config.resolver.sourceExts.push('cjs')
config.resolver.sourceExts.push('mjs')

config.resolver.resolverMainFields.unshift('sbmodern')

config.resolver.assetExts = config.resolver.assetExts.filter(
  ext => !config.resolver.sourceExts.includes(ext)
)

config.transformer.babelTransformerPath = require.resolve('./metro.transformer.js')

module.exports = config
