const { override, fixBabelImports, addLessLoader } = require('customize-cra');
process.env.GENERATE_SOURCEMAP = "false";
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        //  style: 'css',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);