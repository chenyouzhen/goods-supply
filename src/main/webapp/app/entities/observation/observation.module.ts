import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GoodsSupplySharedModule } from 'app/shared/shared.module';
import { ObservationComponent } from './observation.component';
import { ObservationDetailComponent } from './observation-detail.component';
import { ObservationUpdateComponent } from './observation-update.component';
import { ObservationDeleteDialogComponent } from './observation-delete-dialog.component';
import { observationRoute } from './observation.route';

@NgModule({
  imports: [GoodsSupplySharedModule, RouterModule.forChild(observationRoute)],
  declarations: [ObservationComponent, ObservationDetailComponent, ObservationUpdateComponent, ObservationDeleteDialogComponent],
  entryComponents: [ObservationDeleteDialogComponent]
})
export class GoodsSupplyObservationModule {}
