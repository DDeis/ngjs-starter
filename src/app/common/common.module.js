import angular from 'angular';

import NavModule from './nav/nav.module';
import FooterModule from './footer/footer.module';

const CommonModule = angular.module('app.common', [NavModule, FooterModule])
  .name;

export default CommonModule;
