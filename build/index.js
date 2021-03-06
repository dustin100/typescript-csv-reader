"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvReader_1 = require("./CsvReader");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var csvReader = new CsvReader_1.CsvReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Chelsea'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
