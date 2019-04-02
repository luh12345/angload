import {
  AngLoadModule
} from "./src/app/ang-load-module/ang-load-module.module"

import {
  AngLoadService
} from "./src/app/service/loading.service";

exports.AngLoadModule = function () {
  return AngLoadModule;
}

exports.AngLoadService = function () {
  return AngLoadService;
}
