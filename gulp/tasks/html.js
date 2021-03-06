// import fileinclude from 'gulp-file-include'; // если используем fileinclude, а не pug
// import htmlMin from 'gulp-htmlmin'; // если используем fileinclude, а не pug
import pug from 'gulp-pug'; // если используем pug, а не fileinclude
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

export const html = () => {
    return (
        app.gulp
            .src(app.path.src.html)
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: 'HTML',
                        message: 'Error: <%= error.message %>',
                    }),
                ),
            )
            // .pipe(fileinclude()) // если используем fileinclude, а не pug
            .pipe(
                pug({
                    pretty: true, // сжатие html файлов
                    verbose: true, // показать в терминале какой файл обработан
                }),
            ) // если используем pug, а не fileinclude
            .pipe(app.plugins.replace(/@img\//g, 'images/'))
            .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    versionNumber({
                        value: '%DT%',
                        append: {
                            key: '_v',
                            cover: 0,
                            to: ['css', 'js'],
                        },
                        output: {
                            file: 'gulp/version.json',
                        },
                    }),
                ),
            )
            // .pipe(
            //     app.plugins.if(
            //         app.isBuild,
            //         htmlMin({
            //             collapseWhitespace: true, // удаляем все переносы
            //             removeComments: true, // удаляем все комментарии
            //         }),
            //     ),
            // ) // если используем fileinclude, а не pug
            .pipe(app.gulp.dest(app.path.build.html))
            .pipe(app.plugins.browsersync.stream())
    );
};
