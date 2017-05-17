/*
 --npm install json2csv --save
 * 导出excel
 * data：数据
 * fields 导出列数据
 * fieldNames 导出列头
 * fileName 导出文件名称
 */
import json2csv from 'json2csv'

const Csvexport = function (data, fields, fieldNames, fileName) {
  try {
    var result = json2csv({ data: data, fields: fields, fieldNames: fieldNames });
    var csvContent = "data:text/csv;charset=GBK,\uFEFF" + result;
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${(fileName || 'file')}.xls`);
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "my_data.csv".
    document.body.removeChild(link); // Required for FF

  } catch (err) {
    // Errors are thrown for bad options, or if the data is empty and no fields are provided.
    // Be sure to provide fields if it is possible that your data array will be empty.
    console.error(err);
  }
}
// module.exports = function (data, fields, fieldNames, fileName) {
//
// };
export default Csvexport ;
