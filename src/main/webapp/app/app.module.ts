import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GoodsSupplySharedModule } from 'app/shared/shared.module';
import { GoodsSupplyCoreModule } from 'app/core/core.module';
import { GoodsSupplyAppRoutingModule } from './app-routing.module';
import { GoodsSupplyHomeModule } from './home/home.module';
import { GoodsSupplyEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GoodsSupplySharedModule,
    GoodsSupplyCoreModule,
    GoodsSupplyHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GoodsSupplyEntityModule,
    GoodsSupplyAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class GoodsSupplyAppModule {}
