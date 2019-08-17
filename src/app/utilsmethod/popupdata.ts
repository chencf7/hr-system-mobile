export enum popupType {
  Alert,
  AlertNet,
  SearchRefer,
}


export let popupCodeMap = new Map<string, any>()
  .set('alert_leavetype', {
    type: popupType.Alert
  });


export let popupDataMap = new Map<string, any>()
  .set('alert_leavetype', {
    header: '请假类型',
    data: [
      {value: '事假'},
      {value: '病假'}
    ]
  });
