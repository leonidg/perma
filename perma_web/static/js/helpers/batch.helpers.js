var BatchViewModule = require('../batch-view.module.js');

export function human_timestamp_from_batch(batch) {
    return new Date(batch.started_on).toLocaleString("en-us", {
        year:   "numeric",
        month:  "long",
        day:    "numeric",
        hour:   "numeric",
        minute: "2-digit"
    });
}

export function show_modal_with_batch(batch) {
    BatchViewModule.show_batch(batch.id, batch.saved_folder);
    $("#batch-view-modal").modal("show");
}

export function create_clickable_batch_el($el, batch) {
    var human_timestamp = human_timestamp_from_batch(batch);
    $el.text("Batch created " + human_timestamp);
    $el.click(function() {
        show_modal_with_batch(batch);
    });
}