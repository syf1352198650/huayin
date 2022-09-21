import Vue from "vue";
import {
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Divider,
  Pagination,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from "element-ui";

const components = [
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Divider,
  Pagination,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
];

const Element = {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};

Vue.use(Element);
Vue.config.productionTip = false;
