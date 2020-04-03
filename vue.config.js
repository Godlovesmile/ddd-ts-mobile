const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

// 项目的主要配置文件
module.exports = {
	// outputDir: process.env.outputDir,
	chainWebpack: config => {
		// 修改文件引入自定义路径
		// config.resolve.alias.set('@', resolve('src'));
		// .set('@components', resolve('src/components'))
		// .set('@views', resolve('src/views'))
		// .set('@api', resolve('src/services/api'))
		// .set('@request', resolve('src/services/utils/request'))
		// .set('@utils', resolve('src/services/utils'))
		// .set('@assets', resolve('src/assets'));
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/scss/variables.scss";' // 引入全局变量
			}
		}
	}
};
