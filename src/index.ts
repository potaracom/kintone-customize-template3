(function () {
  "use strict";

  interface IndexEvent {
    appId: number;
    viewType: string;
    viewId: number;
    viewName: string;
    records: kintone.types.SavedFields[];
    offset: number;
    size: number;
    date: null;
    type: string;
  }

  interface DetailEvent {
    appId: number;
    record: kintone.types.SavedFields;
    recordId: number;
    type: string;
  }

  kintone.events.on("app.record.index.show", function (event: IndexEvent) {
    console.log(event);
  });

  kintone.events.on("app.record.detail.show", function (event: DetailEvent) {
    console.log(event);
  });
})();
