import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RemaxOptions } from '@remax/types';
import * as styleConfig from '../../utils/styleConfig';

function applyLoaders(
  rule: Config.Rule<Config.Rule<Config.Module>>,
  preProcessors: Array<{ name: string; loader: string; options?: any }>,
  cssModules: boolean
) {
  rule.use('mini-css-extract-loader').loader(MiniCssExtractPlugin.loader);

  rule
    .use('css-loader')
    .loader(require.resolve('css-loader'))
    .options({
      importLoaders: preProcessors.length,
      modules: cssModules
        ? {
            localIdentName: '[local]___[hash:base64:5]',
          }
        : false,
    });

  preProcessors.forEach(preprocessor => {
    rule
      .use(preprocessor.name)
      .loader(preprocessor.loader)
      .options(preprocessor.options ?? {});
  });
}

export default function cssConfig(webpackConfig: Config, options: RemaxOptions, web: boolean) {
  const rule = webpackConfig.module.rule('css').test(styleConfig.styleMatcher);
  const preProcessors = [
    {
      name: 'postcss-loader',
      loader: require.resolve('postcss-loader'),
      options: {
        config: {
          path: styleConfig.resolvePostcssConfig(options),
          ctx: {
            plugins: {
              [require.resolve('postcss-preset-env')]: web && {
                browsers: ['chrome >= 49', 'edge >= 13', 'ios >= 8', 'Android >= 4.4'],
              },
              [require.resolve('@remax/postcss-px2units')]:
                options.pxToRpx &&
                (web
                  ? {
                      targetUnits: 'rem',
                      divisor: 100,
                    }
                  : {}),
              [require.resolve('@remax/postcss-tag')]: web && {},
            },
          },
        },
      },
    },
    styleConfig.enabled('less') && {
      name: 'less-loader',
      loader: require.resolve('less-loader'),
    },
    styleConfig.enabled('node-sass') && {
      name: 'sass-loader',
      loader: require.resolve('sass-loader'),
    },
    styleConfig.enabled('stylus') && {
      name: 'stylus-loader',
      loader: require.resolve('stylus-loader'),
    },
  ].filter(Boolean) as any[];

  applyLoaders(rule.oneOf('modules').resourceQuery(/modules/), preProcessors, true);
  applyLoaders(rule.oneOf('normal'), preProcessors, false);
}
