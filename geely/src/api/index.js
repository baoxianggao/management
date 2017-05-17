
// const _baseUrl = 'http://180.168.194.98:7888/EBWebServer-2.0';
const _baseUrl = 'http://192.168.1.134:8080/rest/Vehicle/';

export default {
  getStatus () {
    return _baseUrl + 'TboxGetVehicleBasicInfo'
  },
  getRegNumber(){
    return _baseUrl + 'TboxLoadVehicles'
  },
  getActiveNumber(){
    return _baseUrl + 'TboxActiveVehicles'
  },
  getServerStatus(){
    return 'http://192.168.1.160:7888/jenkins/computer/api/json?pretty=true'

  }
}
