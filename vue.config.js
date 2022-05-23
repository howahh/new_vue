module.exports = {
	runtimeCompiler: true,
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = '知识产权侵权溯源系统'
				return args
			})
	}
}
