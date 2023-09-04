/* eslint-disable node/no-extraneous-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const upstreamTransformer = require('metro-react-native-babel-transformer')

module.exports.transform = async props => {
  if (props.filename.endsWith('.svg')) {
    return require('react-native-svg-transformer').transform(props)
  }
  // Then pass it to the upstream transformer.
  return upstreamTransformer.transform(props)
}
