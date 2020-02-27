import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ILink, Link } from 'app/shared/model/link.model';
import { LinkService } from './link.service';
import { IAssemblyLine } from 'app/shared/model/assembly-line.model';
import { AssemblyLineService } from 'app/entities/assembly-line/assembly-line.service';

@Component({
  selector: 'jhi-link-update',
  templateUrl: './link-update.component.html'
})
export class LinkUpdateComponent implements OnInit {
  isSaving = false;
  assemblylines: IAssemblyLine[] = [];

  editForm = this.fb.group({
    id: [],
    name: [],
    deviceId: [null, [Validators.required]],
    description: [],
    assemblylineId: [null, Validators.required]
  });

  constructor(
    protected linkService: LinkService,
    protected assemblyLineService: AssemblyLineService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ link }) => {
      this.updateForm(link);

      this.assemblyLineService.query().subscribe((res: HttpResponse<IAssemblyLine[]>) => (this.assemblylines = res.body || []));
    });
  }

  updateForm(link: ILink): void {
    this.editForm.patchValue({
      id: link.id,
      name: link.name,
      deviceId: link.deviceId,
      description: link.description,
      assemblylineId: link.assemblylineId
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const link = this.createFromForm();
    if (link.id !== undefined) {
      this.subscribeToSaveResponse(this.linkService.update(link));
    } else {
      this.subscribeToSaveResponse(this.linkService.create(link));
    }
  }

  private createFromForm(): ILink {
    return {
      ...new Link(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      deviceId: this.editForm.get(['deviceId'])!.value,
      description: this.editForm.get(['description'])!.value,
      assemblylineId: this.editForm.get(['assemblylineId'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILink>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IAssemblyLine): any {
    return item.id;
  }
}
