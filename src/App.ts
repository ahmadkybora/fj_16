import Component from '../__FJ__/Component';
import Router from '../__FJ__/Router';

import Articles from './components/Articles';
import Products from './components/Products';
import Table from './components/utils/table';

// کد زیر را در تایپ اسکریپت بنویسید
Component.create("page-router", Router);
Component.create("c-articles", Articles);
Component.create("c-products", Products);


Component.create("c-table", Table);