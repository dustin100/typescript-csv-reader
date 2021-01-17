import { MatchReader } from './MatchReader';
import { CsvReader } from './CsvReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvReader = new CsvReader('football.csv');

const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Chelsea'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
