import * as wasi from "wasi";

export interface DriversLicenses
{
  id : number | undefined
  uid : number | undefined
  cardNumber : string | undefined
  orgid : number | undefined
  acquiredate : Date | undefined
  expirationdate : Date | undefined
}
