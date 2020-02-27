import { Moment } from 'moment';
import { IObservation } from 'app/shared/model/observation.model';
import { ILink } from 'app/shared/model/link.model';
import { IRecord } from 'app/shared/model/record.model';

export interface IAssemblyLine {
  id?: number;
  name?: string;
  type?: string;
  description?: string;
  capacity?: Moment;
  planCapacity?: Moment;
  reserve?: string;
  observations?: IObservation[];
  links?: ILink[];
  records?: IRecord[];
  productName?: string;
  productId?: number;
}

export class AssemblyLine implements IAssemblyLine {
  constructor(
    public id?: number,
    public name?: string,
    public type?: string,
    public description?: string,
    public capacity?: Moment,
    public planCapacity?: Moment,
    public reserve?: string,
    public observations?: IObservation[],
    public links?: ILink[],
    public records?: IRecord[],
    public productName?: string,
    public productId?: number
  ) {}
}
