import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'factory',
        loadChildren: () => import('./factory/factory.module').then(m => m.GoodsSupplyFactoryModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.GoodsSupplyProductModule)
      },
      {
        path: 'assembly-line',
        loadChildren: () => import('./assembly-line/assembly-line.module').then(m => m.GoodsSupplyAssemblyLineModule)
      },
      {
        path: 'observation',
        loadChildren: () => import('./observation/observation.module').then(m => m.GoodsSupplyObservationModule)
      },
      {
        path: 'alarm',
        loadChildren: () => import('./alarm/alarm.module').then(m => m.GoodsSupplyAlarmModule)
      },
      {
        path: 'kpi',
        loadChildren: () => import('./kpi/kpi.module').then(m => m.GoodsSupplyKpiModule)
      },
      {
        path: 'record',
        loadChildren: () => import('./record/record.module').then(m => m.GoodsSupplyRecordModule)
      },
      {
        path: 'link',
        loadChildren: () => import('./link/link.module').then(m => m.GoodsSupplyLinkModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class GoodsSupplyEntityModule {}
