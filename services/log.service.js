import chalk from 'chalk'
import dedent from 'dedent-js'
import logSymbols from 'log-symbols';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ')+ ' '+error)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message)
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
                Без параметров - вывод погоды
                -s [CITY] для установки города
                -h для вывода помощи
                -t [API_KEY] для сохранения токена
        `
    )
}

const printWeather = (data) => {
    if (data) {
        console.log(
            dedent`${chalk.bgGreen(' Погода ')}
                    ${logSymbols.success} город: ${data.name}
                    ${logSymbols.info} как: ${data.weather[0].description}
                    ${logSymbols.info} скорость ветра: ${data.wind?.speed}
            `
        ) 
    }
}

export { printError, printSuccess, printHelp, printWeather }